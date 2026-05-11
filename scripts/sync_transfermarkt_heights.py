#!/usr/bin/env python3
"""
Sync player heights in data.js from Transfermarkt profile pages.

Trusted source: transfermarkt.com player profile ("Height").
"""

from __future__ import annotations

import re
import sys
import urllib.request
from pathlib import Path


DATA_FILE = Path(__file__).resolve().parents[1] / "data.js"
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0 Safari/537.36"


def meters_to_feet_inches(height_m: str) -> str:
    value = float(height_m.replace(",", ".").strip())
    total_inches = round(value * 39.37007874)
    feet = total_inches // 12
    inches = total_inches % 12
    return f"{feet}'{inches}\""


def extract_height_from_html(html: str) -> str | None:
    match = re.search(r"Height:</span>\s*<span[^>]*>\s*([0-9]+(?:[.,][0-9]+)?)\s*m", html, re.I | re.S)
    if not match:
        return None
    return meters_to_feet_inches(match.group(1))


def fetch_height_ft(player_id: str) -> str | None:
    urls = [
        f"https://www.transfermarkt.com/-/profil/spieler/{player_id}",
        f"https://www.transfermarkt.us/-/profil/spieler/{player_id}",
        f"https://r.jina.ai/http://www.transfermarkt.com/-/profil/spieler/{player_id}",
    ]
    last_exc = None
    for url in urls:
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=20) as res:
                html = res.read().decode("utf-8", "ignore")
            found = extract_height_from_html(html)
            if found:
                return found
        except Exception as exc:  # noqa: BLE001
            last_exc = exc
    if last_exc:
        raise last_exc
    return None


def main() -> int:
    text = DATA_FILE.read_text(encoding="utf-8")
    entry_pattern = re.compile(
        r'\{ id: "([^"]+)",.*?explicitPhoto: "https://img\.a\.transfermarkt\.technology/portrait/header/(\d+)-[^"]+".*?\},',
        re.S,
    )
    updates = 0
    failures: list[str] = []

    for match in entry_pattern.finditer(text):
        player_key = match.group(1)
        tm_id = match.group(2)
        try:
            height_ft = fetch_height_ft(tm_id)
        except Exception as exc:  # noqa: BLE001
            failures.append(f"{player_key}: {exc}")
            continue
        if not height_ft:
            failures.append(f"{player_key}: no height found on Transfermarkt profile")
            continue

        block = match.group(0)
        if 'height: "' in block:
            new_block = re.sub(r'height: "[^"]*"', f'height: "{height_ft}"', block)
        else:
            new_block = block.replace(" },", ', height: "' + height_ft + '" },')
        if 'heightVerified:' in new_block:
            new_block = re.sub(r"heightVerified:\s*(true|false)", "heightVerified: true", new_block)
        else:
            new_block = new_block.replace(" },", ', heightVerified: true },')
        if 'heightSource:' in new_block:
            new_block = re.sub(r'heightSource:\s*("[^"]*"|null)', 'heightSource: "Transfermarkt"', new_block)
        else:
            new_block = new_block.replace(" },", ', heightSource: "Transfermarkt" },')

        if new_block != block:
            text = text.replace(block, new_block, 1)
            updates += 1

    DATA_FILE.write_text(text, encoding="utf-8")
    print(f"Updated heights: {updates}")
    if failures:
        print("Failures:")
        for f in failures:
            print(f"  - {f}")
    return 0 if updates else 1


if __name__ == "__main__":
    raise SystemExit(main())
