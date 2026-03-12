const { players, flagMeta } = window.USMNT_DATA;

const publications = [
  {
    title: "Kristoffer Lund Exclusive",
    date: "2024-09-14",
    preview: "Joshua Reports sits down with Kristoffer Lund to discuss his rise and USMNT ambitions.",
    relatedPlayerId: "kris-lund",
    type: "external",
    url: "https://www.sporf.com/kristoffer-lund-exclusive/",
  },
  {
    title: "Kevin Paredes: America's Next Sensation in Europe",
    date: "2024-04-02",
    preview: "A scouting-focused breakdown of Kevin Paredes and his pathway in Europe.",
    relatedPlayerId: "paredes",
    type: "external",
    url: "https://footballtalentscout.net/kevin-paredes-americas-next-sensation-in-europe-by-joshua-nkan/",
  },
  {
    title: "Why Black Communities in the US Haven't Dominated Soccer",
    date: "2026-03-11",
    preview: "As an African American sports fan, I’ve seen no shortage of representation at the top when it comes to the All-American superstar.",
    relatedPlayerId: "weah",
    type: "local",
    markdownPath: "./articles/why-black-communities-us-soccer.md",
  },
];

const mediaList = document.getElementById("media-list");
const modal = document.getElementById("player-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalCloseBtn = document.getElementById("modal-close");

const proxyPhoto = (url) => `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ""))}`;
const getPhotoFallback = () => "./playerface.jpg";

const bindPlayerImage = (imgEl, url) => {
  const proxyUrl = proxyPhoto(url);
  let stage = 0;
  imgEl.crossOrigin = "anonymous";
  imgEl.referrerPolicy = "no-referrer";
  imgEl.src = proxyUrl;
  imgEl.onerror = () => {
    stage += 1;
    if (stage === 1) imgEl.src = url;
    else imgEl.src = getPhotoFallback();
  };
};

const createFlag = (country) => {
  const meta = flagMeta[country] || { fallback: "usa" };
  const wrap = document.createElement("span");
  wrap.className = `country-flag fallback-${meta.fallback}`;
  wrap.setAttribute("role", "img");
  wrap.setAttribute("aria-label", country);
  if (meta.png) {
    const img = document.createElement("img");
    img.src = `./flags/${meta.png}.png`;
    img.alt = country;
    img.addEventListener("error", () => img.remove());
    wrap.append(img);
  }
  return wrap;
};

const openInfoModal = (player) => {
  modalTitle.textContent = player.fullName;
  modalBody.innerHTML = `
    <div class="modal-player">
      <img id="modal-face" src="${player.explicitPhoto}" alt="${player.fullName}" class="modal-player-face" />
      <ul>
        <li><strong>Age:</strong> ${player.age}</li>
        <li><strong>Height:</strong> ${player.height || "—"}</li>
        <li><strong>Club:</strong> ${player.club} <span id="club-flag-wrap"></span></li>
        <li><strong>Place of birth:</strong> ${player.birthCity} <span id="birth-flag-wrap"></span></li>
        <li><strong>Dominant foot:</strong> ${player.dominantFoot || "—"}</li>
        <li><strong>Other positions:</strong> ${player.otherPositions?.length ? player.otherPositions.join(", ") : "—"}</li>
        <li><strong>Eligible countries:</strong> ${player.eligibleCountries.join(", ")}</li>
      </ul>
    </div>`;
  bindPlayerImage(document.getElementById("modal-face"), player.explicitPhoto);
  document.getElementById("club-flag-wrap").append(createFlag(player.clubCountry));
  document.getElementById("birth-flag-wrap").append(createFlag(player.birthCountry));
  modal.showModal();
};

const createRelatedPlayerCard = (player) => {
  const card = document.createElement("article");
  card.className = "player-card compact-card media-related-card";

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "remove-btn";
  removeBtn.setAttribute("aria-hidden", "true");
  removeBtn.tabIndex = -1;
  removeBtn.textContent = "×";

  const metaTop = document.createElement("div");
  metaTop.className = "player-meta-top";

  const pos = document.createElement("span");
  pos.className = "player-position";
  pos.textContent = player.position;

  const flags = document.createElement("div");
  flags.className = "flag-row";
  const cardFlags = player.showDualFlagsOnCard ? player.eligibleCountries : ["USA"];
  cardFlags.forEach((country) => flags.append(createFlag(country)));

  metaTop.append(pos, flags);

  const img = document.createElement("img");
  img.className = "player-face";
  img.alt = player.fullName;
  bindPlayerImage(img, player.explicitPhoto);

  const name = document.createElement("div");
  name.className = "player-last-name";
  name.textContent = player.displayName;

  const infoBtn = document.createElement("button");
  infoBtn.type = "button";
  infoBtn.className = "info-btn";
  infoBtn.innerHTML = "<em>i</em>";
  infoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    openInfoModal(player);
  });

  card.append(removeBtn, metaTop, img, name, infoBtn);
  return card;
};

const makeReader = (text, container) => {
  const controls = document.createElement("div");
  controls.className = "reader-controls";
  const playBtn = document.createElement("button");
  const pauseBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const ffBtn = document.createElement("button");
  const speed = document.createElement("select");
  [0.75, 1, 1.25, 1.5, 2].forEach((r) => {
    const option = document.createElement("option");
    option.value = String(r);
    option.textContent = `${r}x`;
    if (r === 1) option.selected = true;
    speed.append(option);
  });
  playBtn.textContent = "Play";
  pauseBtn.textContent = "Pause";
  backBtn.textContent = "⟲ Rewind";
  ffBtn.textContent = "⟳ Fast Forward";
  controls.append(playBtn, pauseBtn, backBtn, ffBtn, speed);

  let start = 0;
  let rate = 1;
  let speaking = false;

  const speak = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.slice(start));
    utterance.rate = rate;
    utterance.onboundary = (event) => {
      if (typeof event.charIndex === "number") start += event.charIndex;
    };
    utterance.onend = () => {
      speaking = false;
      start = 0;
    };
    speaking = true;
    window.speechSynthesis.speak(utterance);
  };

  playBtn.onclick = () => {
    if (!speaking) speak();
    else if (window.speechSynthesis.paused) window.speechSynthesis.resume();
  };
  pauseBtn.onclick = () => window.speechSynthesis.pause();
  backBtn.onclick = () => {
    start = Math.max(0, start - 600);
    speak();
  };
  ffBtn.onclick = () => {
    start = Math.min(text.length - 1, start + 600);
    speak();
  };
  speed.onchange = () => {
    rate = Number(speed.value || 1);
    if (speaking) speak();
  };

  container.append(controls);
};

const createLocalReader = (entry, host) => {
  const content = document.createElement("div");
  content.className = "reader-content";
  content.hidden = true;

  const button = document.createElement("button");
  button.className = "reader-toggle";
  button.type = "button";
  button.textContent = "Open text reader";

  let loaded = false;
  button.onclick = async () => {
    content.hidden = !content.hidden;
    button.textContent = content.hidden ? "Open text reader" : "Close text reader";
    if (loaded || content.hidden) return;
    const response = await fetch(entry.markdownPath);
    const text = await response.text();
    makeReader(text, content);
    const article = document.createElement("article");
    article.className = "reader-article";
    article.textContent = text;
    content.append(article);
    loaded = true;
  };

  host.append(button, content);
};

const render = async () => {
  for (const entry of publications) {
    const card = document.createElement("section");
    card.className = "publication-card";

    const title = document.createElement("h2");
    if (entry.type === "external") {
      const link = document.createElement("a");
      link.href = entry.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = entry.title;
      title.append(link);
    } else {
      title.textContent = entry.title;
    }

    const preview = document.createElement("p");
    preview.innerHTML = `<em>${entry.preview}</em>...`;

    const meta = document.createElement("div");
    meta.className = "publication-meta";
    meta.textContent = `Published: ${entry.date}`;

    const relatedPlayer = players.find((p) => p.id === entry.relatedPlayerId);
    const relatedWrap = document.createElement("div");
    relatedWrap.className = "media-related-wrap";
    const relatedLabel = document.createElement("p");
    relatedLabel.className = "related-player-label";
    relatedLabel.textContent = "Related player";
    relatedWrap.append(relatedLabel);
    if (relatedPlayer) relatedWrap.append(createRelatedPlayerCard(relatedPlayer));

    card.append(title, meta, preview, relatedWrap);
    if (entry.type === "local" && entry.markdownPath) createLocalReader(entry, card);
    mediaList.append(card);
  }
};

modalCloseBtn?.addEventListener("click", () => modal.close());
render();
