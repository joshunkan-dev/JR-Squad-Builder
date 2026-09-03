const formationSlots = {
  433: [
    { key: "st", label: "ST", x: 50, y: 10 }, { key: "lw", label: "LW", x: 16, y: 16 }, { key: "rw", label: "RW", x: 84, y: 16 },
    { key: "lcm", label: "CM", x: 24, y: 33 }, { key: "cm", label: "CDM", x: 50, y: 37 }, { key: "rcm", label: "CM", x: 76, y: 33 },
    { key: "lb", label: "LB", x: 8, y: 52 }, { key: "lcb", label: "CB", x: 34, y: 54 }, { key: "rcb", label: "CB", x: 66, y: 54 }, { key: "rb", label: "RB", x: 92, y: 52 },
    { key: "gk", label: "GK", x: 50, y: 75 },
  ],
  442: [
    { key: "ls", label: "ST", x: 40, y: 12 }, { key: "rs", label: "ST", x: 60, y: 12 },
    { key: "lm", label: "LM", x: 8, y: 29 }, { key: "lcm", label: "CM", x: 36, y: 31 }, { key: "rcm", label: "CM", x: 64, y: 31 }, { key: "rm", label: "RM", x: 92, y: 29 },
    { key: "lb", label: "LB", x: 8, y: 52 }, { key: "lcb", label: "CB", x: 34, y: 54 }, { key: "rcb", label: "CB", x: 66, y: 54 }, { key: "rb", label: "RB", x: 92, y: 52 },
    { key: "gk", label: "GK", x: 50, y: 76 },
  ],
  3421: [
    { key: "st", label: "ST", x: 50, y: 13 }, { key: "lam", label: "AM", x: 38, y: 22 }, { key: "ram", label: "AM", x: 62, y: 22 },
    { key: "lwb", label: "LWB", x: 8, y: 38 }, { key: "lcm", label: "CM", x: 38, y: 42 }, { key: "rcm", label: "CM", x: 62, y: 42 }, { key: "rwb", label: "RWB", x: 92, y: 38 },
    { key: "lcb", label: "CB", x: 24, y: 56 }, { key: "cb", label: "CB", x: 50, y: 58 }, { key: "rcb", label: "CB", x: 76, y: 56 },
    { key: "gk", label: "GK", x: 50, y: 76 },
  ],
};

const subsSlots = Array.from({ length: 7 }, (_, i) => ({ key: `sub-${i + 1}`, label: `SUB ${i + 1}` }));
const reservesSlots = Array.from({ length: 8 }, (_, i) => ({ key: `res-${i + 1}`, label: `RES ${i + 1}` }));

const sharedData = window.USMNT_DATA || {};
const players = Array.isArray(sharedData.players) ? sharedData.players : [];
const flagMeta = sharedData.flagMeta || {};

const pitchEl = document.getElementById("pitch");
const subsColumnEl = document.getElementById("subs-column");
const reservesColumnEl = document.getElementById("reserves-column");
const formationSelectEl = document.getElementById("formation-select");
const clearBtn = document.getElementById("clear-btn");
const cardTemplate = document.getElementById("player-card-template");
const squadBoardEl = document.getElementById("squad-board");

const modal = document.getElementById("player-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalCloseBtn = document.getElementById("modal-close");

const slotSearchModal = document.getElementById("slot-search-modal");
const slotSearchTitle = document.getElementById("slot-search-title");
const slotSearchInput = document.getElementById("slot-search-input");
const slotSearchResults = document.getElementById("slot-search-results");
const slotSearchClose = document.getElementById("slot-search-close");

const rosterNameInput = document.getElementById("roster-name");
const shareBtn = document.getElementById("share-btn");
const shareModal = document.getElementById("share-modal");
const shareClose = document.getElementById("share-close");
const shareStatus = document.getElementById("share-status");
const saveImageBtn = document.getElementById("save-image-btn");
const emailImageBtn = document.getElementById("email-image-btn");
const textImageBtn = document.getElementById("text-image-btn");
const xImageBtn = document.getElementById("x-image-btn");
const instagramImageBtn = document.getElementById("instagram-image-btn");
const sharePreview = document.getElementById("share-preview");
const previewImageBtn = document.getElementById("preview-image-btn");
const imagePreviewModal = document.getElementById("image-preview-modal");
const imagePreviewClose = document.getElementById("image-preview-close");
const imagePreviewFull = document.getElementById("image-preview-full");

const lineup = new Map();
let activeSearchSlot = null;
let shareBlob = null;
let sharePreviewUrl = null;

const getPhotoFallback = () => "./playerface.jpg";
const proxyPhoto = (url) => `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ""))}`;
const getPrimaryPhoto = (p) => p.explicitPhoto || getPhotoFallback();
const getRosterName = () => rosterNameInput.value.trim() || "My USMNT Squad";
const getRosterFileName = () => `${getRosterName().replace(/[^a-z0-9-_]+/gi, "-").toLowerCase() || "usmnt-roster"}.png`;

const getLiveAge = (player) => {
  const dob = player.dateOfBirth || player.birthDate;
  if (!dob) return player.age;
  const born = new Date(dob);
  if (Number.isNaN(born.getTime())) return player.age;
  const today = new Date();
  let age = today.getFullYear() - born.getFullYear();
  const m = today.getMonth() - born.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < born.getDate())) age -= 1;
  return age;
};

const getHeight = (player) => {
  if (player.heightVerified && player.height) return player.height;
  return "Pending source verification";
};

const bindPlayerImage = (imgEl, url) => {
  if (!url || url === getPhotoFallback()) {
    imgEl.src = getPhotoFallback();
    return;
  }
  const proxyUrl = proxyPhoto(url);
  let stage = 0;
  imgEl.crossOrigin = "anonymous";
  imgEl.referrerPolicy = "no-referrer";
  imgEl.src = proxyUrl;
  imgEl.onerror = () => {
    stage += 1;
    if (stage === 1) {
      imgEl.src = url;
    } else {
      imgEl.src = getPhotoFallback();
    }
  };
};

const waitForImages = async (root, timeoutMs = 7000) => {
  const images = [...root.querySelectorAll("img")];
  const imagePromises = images.map((img) => new Promise((resolve) => {
    if (img.complete) return resolve();
    const t = setTimeout(resolve, timeoutMs);
    img.addEventListener("load", () => { clearTimeout(t); resolve(); }, { once: true });
    img.addEventListener("error", () => { clearTimeout(t); resolve(); }, { once: true });
  }));
  await Promise.race([
    Promise.all(imagePromises),
    new Promise((resolve) => setTimeout(resolve, timeoutMs + 250)),
  ]);
};

const buildInitialsFallbackClone = (sourceEl) => {
  const clone = sourceEl.cloneNode(true);
  clone.querySelectorAll(".player-card").forEach((card) => {
    const name = card.querySelector(".player-last-name")?.textContent?.trim() || "";
    const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "US";
    const face = card.querySelector(".player-face");
    if (face) {
      face.remove();
      const fallback = document.createElement("div");
      fallback.className = "player-face-fallback";
      fallback.textContent = initials;
      const meta = card.querySelector(".player-meta-top");
      if (meta?.nextSibling) card.insertBefore(fallback, meta.nextSibling);
      else card.append(fallback);
    }
  });
  return clone;
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

const buildFlagRow = (container, player) => {
  container.innerHTML = "";
  const flags = player.showDualFlagsOnCard ? player.eligibleCountries : ["USA"];
  flags.forEach((c) => container.append(createFlag(c)));
};

const openInfoModal = (player) => {
  modalTitle.textContent = player.fullName;
  modalBody.innerHTML = `
    <div class="modal-player">
      <img id="modal-face" src="${getPrimaryPhoto(player)}" alt="${player.fullName}" class="modal-player-face" />
      <ul>
        <li><strong>Age:</strong> ${getLiveAge(player)}</li>
        <li><strong>Club:</strong> ${player.club} <span id="club-flag-wrap"></span></li>
        <li><strong>Place of birth:</strong> ${player.birthCity} <span id="birth-flag-wrap"></span></li>
        <li><strong>Height:</strong> ${getHeight(player)}</li>
        <li><strong>Dominant foot:</strong> ${player.dominantFoot}</li>
        <li><strong>Other positions:</strong> ${player.otherPositions.length ? player.otherPositions.join(", ") : "—"}</li>
        <li><strong>Eligible countries:</strong> ${player.eligibleCountries.join(", ")}</li>
      </ul>
    </div>`;
  const face = document.getElementById("modal-face");
  bindPlayerImage(face, getPrimaryPhoto(player));
  document.getElementById("club-flag-wrap").append(createFlag(player.clubCountry));
  document.getElementById("birth-flag-wrap").append(createFlag(player.birthCountry));
  modal.showModal();
};

const removeFromLineup = (playerId) => {
  const key = [...lineup.entries()].find(([, id]) => id === playerId)?.[0];
  if (!key) return;
  lineup.delete(key);
  renderAllSlots();
};

const createPlayerCard = (player, { filledSlot = false, compact = false } = {}) => {
  const card = cardTemplate.content.firstElementChild.cloneNode(true);
  if (compact) card.classList.add("compact-card");

  const face = card.querySelector(".player-face");
  face.alt = player.fullName;
  bindPlayerImage(face, getPrimaryPhoto(player));

  card.querySelector(".player-last-name").textContent = player.displayName;
  card.querySelector(".player-position").textContent = player.position;
  buildFlagRow(card.querySelector(".flag-row"), player);

  const removeBtn = card.querySelector(".remove-btn");
  if (filledSlot) {
    removeBtn.classList.add("show");
    removeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      removeFromLineup(player.id);
    });
  }

  card.querySelector(".info-btn").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    openInfoModal(player);
  });

  card.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/player-id", player.id);
    e.dataTransfer.effectAllowed = "move";
  });

  return card;
};

const renderSearchResults = () => {
  const q = slotSearchInput.value.trim().toLowerCase();
  slotSearchResults.innerHTML = "";
  if (!q) return;

  const used = new Set(lineup.values());
  players
    .filter((p) => !used.has(p.id))
    .filter((p) => `${p.fullName} ${p.displayName} ${p.position}`.toLowerCase().includes(q))
    .forEach((player) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "search-result";
      button.append(createPlayerCard(player, { compact: true }));
      button.addEventListener("click", () => {
        if (activeSearchSlot) lineup.set(activeSearchSlot, player.id);
        slotSearchModal.close();
        renderAllSlots();
      });
      slotSearchResults.append(button);
    });
};

const openSearchForSlot = (slotKey, label) => {
  activeSearchSlot = slotKey;
  slotSearchTitle.textContent = `Select ${label}`;
  slotSearchInput.value = "";
  renderSearchResults();
  slotSearchModal.showModal();
  slotSearchInput.focus();
};

const createSlotNode = (slot, type = "pitch") => {
  const el = document.createElement("div");
  el.className = `slot ${type === "pitch" ? "pitch-slot" : "side-slot"}`;
  el.dataset.slotKey = slot.key;
  if (type === "pitch") {
    el.style.left = `${slot.x}%`;
    el.style.top = `${slot.y}%`;
  }

  el.addEventListener("dragover", (e) => { e.preventDefault(); el.classList.add("drop-target"); });
  el.addEventListener("dragleave", () => el.classList.remove("drop-target"));
  el.addEventListener("drop", (e) => {
    e.preventDefault();
    el.classList.remove("drop-target");
    const playerId = e.dataTransfer.getData("text/player-id");
    const existing = [...lineup.entries()].find(([, id]) => id === playerId)?.[0];
    if (existing) lineup.delete(existing);
    lineup.set(slot.key, playerId);
    renderAllSlots();
  });

  const playerId = lineup.get(slot.key);
  if (playerId) {
    const player = players.find((p) => p.id === playerId);
    if (player) {
      el.classList.add("filled");
      el.append(createPlayerCard(player, { filledSlot: true, compact: type !== "pitch" }));
    }
  } else {
    const label = document.createElement("span");
    label.className = "slot-label";
    label.textContent = slot.label;
    el.append(label);
    el.addEventListener("click", () => openSearchForSlot(slot.key, slot.label));
  }

  return el;
};

const createShareCanvas = (boardCanvas) => {
  const out = document.createElement("canvas");
  out.width = 1600;
  out.height = 1000;
  const ctx = out.getContext("2d");

  const background = ctx.createLinearGradient(0, 0, out.width, out.height);
  background.addColorStop(0, "#080d28");
  background.addColorStop(0.5, "#20134f");
  background.addColorStop(1, "#071d43");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, out.width, out.height);

  const paintGlow = (x, y, radius, color) => {
    const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
    glow.addColorStop(0, color);
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, out.width, out.height);
  };
  paintGlow(120, 80, 620, "rgba(255,58,130,.38)");
  paintGlow(1510, 960, 680, "rgba(0,183,255,.30)");

  ctx.fillStyle = "rgba(255,255,255,.08)";
  for (let x = 0; x < out.width; x += 48) ctx.fillRect(x, 0, 1, out.height);
  for (let y = 0; y < out.height; y += 48) ctx.fillRect(0, y, out.width, 1);

  ctx.fillStyle = "rgba(255,255,255,.7)";
  ctx.font = "700 21px Inter, Arial, sans-serif";
  ctx.letterSpacing = "2px";
  ctx.fillText("JOSHUA REPORTS  •  USMNT SQUAD BUILDER", 58, 54);
  ctx.letterSpacing = "0px";
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 52px Inter, Arial, sans-serif";
  ctx.fillText(getRosterName(), 58, 116);

  const frame = { x: 42, y: 154, width: 1516, height: 780, radius: 28 };
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,.42)";
  ctx.shadowBlur = 32;
  ctx.shadowOffsetY = 18;
  ctx.fillStyle = "rgba(5,10,28,.78)";
  ctx.beginPath();
  ctx.roundRect(frame.x, frame.y, frame.width, frame.height, frame.radius);
  ctx.fill();
  ctx.restore();
  ctx.strokeStyle = "rgba(255,255,255,.26)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(frame.x, frame.y, frame.width, frame.height, frame.radius);
  ctx.stroke();

  const padding = 26;
  const usableWidth = frame.width - padding * 2;
  const usableHeight = frame.height - padding * 2;
  const scale = Math.min(usableWidth / boardCanvas.width, usableHeight / boardCanvas.height);
  const width = boardCanvas.width * scale;
  const height = boardCanvas.height * scale;
  ctx.drawImage(boardCanvas, frame.x + (frame.width - width) / 2, frame.y + (frame.height - height) / 2, width, height);

  ctx.fillStyle = "rgba(255,255,255,.68)";
  ctx.font = "600 18px Inter, Arial, sans-serif";
  ctx.fillText("Built with Joshua Reports", 58, 974);
  ctx.textAlign = "right";
  ctx.fillText("USMNT Dual National Database", 1542, 974);
  ctx.textAlign = "left";
  return out;
};

const captureBoardBlob = async () => {
  if (!window.html2canvas) throw new Error("Capture utility unavailable");
  shareModal.classList.add("is-busy");

  const clone = squadBoardEl.cloneNode(true);
  clone.classList.add("force-export-layout");
  clone.style.width = "1080px";
  clone.style.maxWidth = "1080px";
  const holder = document.createElement("div");
  holder.style.position = "fixed";
  holder.style.left = "-99999px";
  holder.style.top = "0";
  holder.append(clone);
  document.body.append(holder);

  const renderCanvas = async (node) => {
    await waitForImages(node);
    return await Promise.race([
      window.html2canvas(node, { backgroundColor: null, useCORS: true, scale: 2 }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Capture timed out")), 12000)),
    ]);
  };

  let boardCanvas;
  try {
    try {
      boardCanvas = await renderCanvas(clone);
    } catch (err) {
      const fallbackBoard = buildInitialsFallbackClone(clone);
      const fallbackHolder = document.createElement("div");
      fallbackHolder.style.position = "fixed";
      fallbackHolder.style.left = "-99999px";
      fallbackHolder.style.top = "0";
      fallbackHolder.append(fallbackBoard);
      document.body.append(fallbackHolder);
      try {
        boardCanvas = await renderCanvas(fallbackBoard);
      } finally {
        fallbackHolder.remove();
      }
    }
  } finally {
    holder.remove();
  }
  const out = createShareCanvas(boardCanvas);
  return await new Promise((resolve) => out.toBlob(resolve, "image/png", 1));
};

const openShareModal = async () => {
  shareModal.showModal();
  shareStatus.textContent = "Generating image...";
  shareBlob = null;
  if (sharePreviewUrl) URL.revokeObjectURL(sharePreviewUrl);
  sharePreviewUrl = null;
  sharePreview.hidden = true;
  sharePreview.removeAttribute("src");
  imagePreviewFull.removeAttribute("src");
  try {
    shareBlob = await captureBoardBlob();
    if (!shareBlob) throw new Error("Could not create image");
    sharePreviewUrl = URL.createObjectURL(shareBlob);
    sharePreview.src = sharePreviewUrl;
    imagePreviewFull.src = sharePreviewUrl;
    sharePreview.hidden = false;
    shareStatus.textContent = "Your high-resolution lineup card is ready.";
  } catch (err) {
    shareStatus.textContent = `Could not generate image: ${err.message}`;
  } finally {
    shareModal.classList.remove("is-busy");
  }
};

const withShareFile = async (cb) => {
  if (!shareBlob) return;
  const file = new File([shareBlob], getRosterFileName(), { type: "image/png" });
  await cb(file);
};

const renderAllSlots = () => {
  pitchEl.innerHTML = "";
  subsColumnEl.innerHTML = "";
  reservesColumnEl.innerHTML = "";
  formationSlots[formationSelectEl.value].forEach((slot) => pitchEl.append(createSlotNode(slot, "pitch")));
  subsSlots.forEach((slot) => subsColumnEl.append(createSlotNode(slot, "subs")));
  reservesSlots.forEach((slot) => reservesColumnEl.append(createSlotNode(slot, "reserves")));
};

formationSelectEl.addEventListener("change", () => { lineup.clear(); renderAllSlots(); });
clearBtn.addEventListener("click", () => { lineup.clear(); renderAllSlots(); });
slotSearchInput.addEventListener("input", renderSearchResults);
slotSearchClose.addEventListener("click", () => slotSearchModal.close());
modalCloseBtn.addEventListener("click", () => modal.close());
shareBtn.addEventListener("click", openShareModal);
shareClose.addEventListener("click", () => shareModal.close());
previewImageBtn.addEventListener("click", () => {
  if (!shareBlob) return;
  imagePreviewModal.showModal();
  shareModal.close();
});
imagePreviewClose.addEventListener("click", () => imagePreviewModal.close());
shareModal.addEventListener("close", () => {
  if (!imagePreviewModal.open && sharePreviewUrl) {
    URL.revokeObjectURL(sharePreviewUrl);
    sharePreviewUrl = null;
  }
});
imagePreviewModal.addEventListener("close", () => {
  if (shareBlob && !shareModal.open) {
    shareModal.showModal();
    return;
  }
  if (!shareModal.open && sharePreviewUrl) {
    URL.revokeObjectURL(sharePreviewUrl);
    sharePreviewUrl = null;
  }
shareModal.addEventListener("close", () => {
  if (sharePreviewUrl) URL.revokeObjectURL(sharePreviewUrl);
  sharePreviewUrl = null;
});

saveImageBtn.addEventListener("click", () => withShareFile(async (file) => {
  const url = URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = url;
  a.download = file.name;
  a.click();
  URL.revokeObjectURL(url);
}));

emailImageBtn.addEventListener("click", () => {
  const subject = encodeURIComponent(getRosterName());
  const body = encodeURIComponent("Roster image generated. Save the image and attach it if your mail app cannot attach automatically.");
  window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
});

textImageBtn.addEventListener("click", () => {
  const body = encodeURIComponent("USMNT roster image generated. Save and attach the image to this message.");
  window.open(`sms:?body=${body}`, "_blank");
});

xImageBtn.addEventListener("click", () => {
  const text = encodeURIComponent("Check out the squad I built with the Joshua Report's USMNT Database");
  window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
});

instagramImageBtn.addEventListener("click", async () => {
  const caption = "Check out the squad I built with the Joshua Report's USMNT Database";
  if (shareBlob && navigator.share && navigator.canShare) {
    const file = new File([shareBlob], getRosterFileName(), { type: "image/png" });
    if (navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ title: getRosterName(), text: caption, files: [file] });
        return;
      } catch (_) {}
    }
  }
  window.open("https://www.instagram.com/", "_blank");
});

renderAllSlots();
