const players = [
  { id: "pulisic", fullName: "Christian Pulisic", displayName: "Pulisic", position: "LW", transfermarktId: "315779", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/315779-1691696699.jpg?lm=1", age: 27, club: "AC Milan", clubCountry: "Italy", birthCity: "Hershey", birthCountry: "USA", seasonStats: { appearances: 36, goals: 15, assists: 9 }, eligibleCountries: ["USA", "Croatia"], showDualFlagsOnCard: false },
  { id: "balogun", fullName: "Folarin Balogun", displayName: "Balogun", position: "ST", transfermarktId: "503770", explicitPhoto: "https://cdn.sofifa.net/players/247/463/25_240.png", age: 24, club: "AS Monaco", clubCountry: "France", birthCity: "New York", birthCountry: "USA", seasonStats: { appearances: 28, goals: 10, assists: 3 }, eligibleCountries: ["USA", "England", "Nigeria"], showDualFlagsOnCard: false },
  { id: "weah", fullName: "Timothy Weah", displayName: "Weah", position: "RW", transfermarktId: "406635", age: 26, club: "Juventus", clubCountry: "Italy", birthCity: "New York", birthCountry: "USA", seasonStats: { appearances: 34, goals: 6, assists: 8 }, eligibleCountries: ["USA", "Liberia", "Jamaica", "France"], showDualFlagsOnCard: false },
  { id: "mckennie", fullName: "Weston McKennie", displayName: "McKennie", position: "CM", transfermarktId: "332697", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/332697-1754245044.jpg?lm=1", age: 27, club: "Juventus", clubCountry: "Italy", birthCity: "Little Elm", birthCountry: "USA", seasonStats: { appearances: 35, goals: 4, assists: 9 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "musah", fullName: "Yunus Musah", displayName: "Musah", position: "CM", transfermarktId: "503991", age: 23, club: "AC Milan", clubCountry: "Italy", birthCity: "New York", birthCountry: "USA", seasonStats: { appearances: 31, goals: 2, assists: 3 }, eligibleCountries: ["USA", "England", "Ghana", "Italy"], showDualFlagsOnCard: false },
  { id: "adams", fullName: "Tyler Adams", displayName: "Adams", position: "CDM", transfermarktId: "332705", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/332705-1754244571.jpg?lm=1", age: 27, club: "AFC Bournemouth", clubCountry: "England", birthCity: "Wappingers Falls", birthCountry: "USA", seasonStats: { appearances: 24, goals: 1, assists: 2 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "robinson", fullName: "Antonee 'Jedi' Robinson", displayName: "Robinson", position: "LB", transfermarktId: "349701", age: 29, club: "Fulham", clubCountry: "England", birthCity: "Milton Keynes", birthCountry: "England", seasonStats: { appearances: 35, goals: 1, assists: 8 }, eligibleCountries: ["USA", "England"], showDualFlagsOnCard: false },
  { id: "ream", fullName: "Tim Ream", displayName: "Ream", position: "CB", transfermarktId: "33395", age: 38, club: "Charlotte FC", clubCountry: "USA", birthCity: "St. Louis", birthCountry: "USA", seasonStats: { appearances: 25, goals: 1, assists: 1 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "richards", fullName: "Chris Richards", displayName: "Richards", position: "CB", transfermarktId: "578539", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/578539-1754244701.jpg?lm=1", age: 26, club: "Crystal Palace", clubCountry: "England", birthCity: "Birmingham, Alabama", birthCountry: "USA", seasonStats: { appearances: 27, goals: 1, assists: 1 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "dest", fullName: "Sergiño Dest", displayName: "Dest", position: "RB", transfermarktId: "361104", age: 25, club: "PSV", clubCountry: "Netherlands", birthCity: "Almere", birthCountry: "Netherlands", seasonStats: { appearances: 30, goals: 2, assists: 6 }, eligibleCountries: ["USA", "Netherlands", "Suriname"], showDualFlagsOnCard: false },
  { id: "turner", fullName: "Matt Turner", displayName: "Turner", position: "GK", transfermarktId: "312151", age: 32, club: "Nottingham Forest", clubCountry: "England", birthCity: "Park Ridge", birthCountry: "USA", seasonStats: { appearances: 20, goals: 0, assists: 0 }, eligibleCountries: ["USA", "Lithuania"], showDualFlagsOnCard: false },
  { id: "freese", fullName: "Matt Freese", displayName: "Freese", position: "GK", transfermarktId: "500309", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/500309-1771710880.jpg?lm=1", age: 26, club: "New York City FC", clubCountry: "USA", birthCity: "Wayne", birthCountry: "USA", seasonStats: { appearances: 30, goals: 0, assists: 0 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "brady", fullName: "Chris Brady", displayName: "C. Brady", position: "GK", transfermarktId: "698282", age: 21, club: "Chicago Fire", clubCountry: "USA", birthCity: "Naperville", birthCountry: "USA", seasonStats: { appearances: 27, goals: 0, assists: 0 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "kochen", fullName: "Diego Kochen", displayName: "Kochen", position: "GK", transfermarktId: "938861", age: 19, club: "Barcelona Atlètic", clubCountry: "Spain", birthCity: "Miami", birthCountry: "USA", seasonStats: { appearances: 16, goals: 0, assists: 0 }, eligibleCountries: ["USA", "Spain", "Peru"], showDualFlagsOnCard: true },
  { id: "klinsmann", fullName: "Jonathan Klinsmann", displayName: "Klinsmann", position: "GK", transfermarktId: "291290", age: 28, club: "Cesena", clubCountry: "Italy", birthCity: "Munich", birthCountry: "Germany", seasonStats: { appearances: 25, goals: 0, assists: 0 }, eligibleCountries: ["USA", "Germany"], showDualFlagsOnCard: true },
  { id: "slonina", fullName: "Gabriel Slonina", displayName: "Slonina", position: "GK", transfermarktId: "760336", age: 21, club: "Barnsley", clubCountry: "England", birthCity: "Addison", birthCountry: "USA", seasonStats: { appearances: 29, goals: 0, assists: 0 }, eligibleCountries: ["USA", "Poland"], showDualFlagsOnCard: false },
  { id: "pepi", fullName: "Ricardo Pepi", displayName: "Pepi", position: "ST", transfermarktId: "628264", age: 23, club: "PSV", clubCountry: "Netherlands", birthCity: "El Paso", birthCountry: "USA", seasonStats: { appearances: 32, goals: 14, assists: 4 }, eligibleCountries: ["USA", "Mexico"], showDualFlagsOnCard: false },
  { id: "haji-wright", fullName: "Haji Wright", displayName: "H. Wright", position: "ST", transfermarktId: "315767", age: 27, club: "Coventry City", clubCountry: "England", birthCity: "Los Angeles", birthCountry: "USA", seasonStats: { appearances: 33, goals: 13, assists: 5 }, eligibleCountries: ["USA", "Liberia"], showDualFlagsOnCard: false },
  { id: "agyemang", fullName: "Patrick Agyemang", displayName: "Agyemang", position: "ST", transfermarktId: "987817", age: 24, club: "Charlotte FC", clubCountry: "USA", birthCity: "East Hartford", birthCountry: "USA", seasonStats: { appearances: 29, goals: 11, assists: 3 }, eligibleCountries: ["USA", "Ghana"], showDualFlagsOnCard: true },
  { id: "mcglynn", fullName: "Jack McGlynn", displayName: "McGlynn", position: "CM", transfermarktId: "829303", age: 22, club: "Philadelphia Union", clubCountry: "USA", birthCity: "Middletown", birthCountry: "USA", seasonStats: { appearances: 33, goals: 4, assists: 7 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "morris", fullName: "Aidan Morris", displayName: "A. Morris", position: "CM", transfermarktId: "531066", age: 24, club: "Middlesbrough", clubCountry: "England", birthCity: "Fort Lauderdale", birthCountry: "USA", seasonStats: { appearances: 34, goals: 2, assists: 5 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "sands", fullName: "James Sands", displayName: "Sands", position: "CDM", transfermarktId: "478321", age: 25, club: "St. Pauli", clubCountry: "Germany", birthCity: "Rye", birthCountry: "USA", seasonStats: { appearances: 31, goals: 1, assists: 2 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "luna", fullName: "Diego Luna", displayName: "Luna", position: "CAM", transfermarktId: "805385", age: 21, club: "Real Salt Lake", clubCountry: "USA", birthCity: "Sunnyvale", birthCountry: "USA", seasonStats: { appearances: 31, goals: 8, assists: 9 }, eligibleCountries: ["USA", "Mexico"], showDualFlagsOnCard: false },
  { id: "reyna", fullName: "Giovanni Reyna", displayName: "Reyna", position: "CAM", transfermarktId: "504215", age: 24, club: "Borussia Dortmund", clubCountry: "Germany", birthCity: "Sunderland", birthCountry: "England", seasonStats: { appearances: 21, goals: 3, assists: 4 }, eligibleCountries: ["USA", "England", "Argentina", "Portugal"], showDualFlagsOnCard: false },
  { id: "brenden-aaronson", fullName: "Brenden Aaronson", displayName: "B. Aaronson", position: "CAM", transfermarktId: "393323", age: 24, club: "Union Berlin", clubCountry: "Germany", birthCity: "Medford", birthCountry: "USA", seasonStats: { appearances: 32, goals: 4, assists: 6 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "paxten-aaronson", fullName: "Paxten Aaronson", displayName: "P. Aaronson", position: "CAM", transfermarktId: "668455", age: 21, club: "Eintracht Frankfurt", clubCountry: "Germany", birthCity: "Medford", birthCountry: "USA", seasonStats: { appearances: 28, goals: 5, assists: 4 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "liam-west", fullName: "Liam West", displayName: "West", position: "RW", transfermarktId: "1068117", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/1068117-1771592380.jpg?lm=1", age: 18, club: "Vålerenga", clubCountry: "Norway", birthCity: "Oslo", birthCountry: "Norway", seasonStats: { appearances: 16, goals: 1, assists: 3 }, eligibleCountries: ["USA", "Norway"], showDualFlagsOnCard: true },
  { id: "culbreath", fullName: "Montrell Culbreath", displayName: "Culbreath", position: "RW", transfermarktId: "1173321", age: 19, club: "SC Freiburg II", clubCountry: "Germany", birthCity: "Munich", birthCountry: "Germany", seasonStats: { appearances: 18, goals: 5, assists: 2 }, eligibleCountries: ["USA", "Germany"], showDualFlagsOnCard: true },
  { id: "mckenzie", fullName: "Mark McKenzie", displayName: "McKenzie", position: "CB", transfermarktId: "429259", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/429259-1714036622.png?lm=1", age: 26, club: "Toulouse", clubCountry: "France", birthCity: "Bear", birthCountry: "USA", seasonStats: { appearances: 30, goals: 1, assists: 1 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "banks", fullName: "Noahkai Banks", displayName: "Banks", position: "CB", transfermarktId: "1043328", age: 18, club: "FC Augsburg", clubCountry: "Germany", birthCity: "Honolulu", birthCountry: "USA", seasonStats: { appearances: 19, goals: 1, assists: 0 }, eligibleCountries: ["USA", "Germany"], showDualFlagsOnCard: true },
];

const formationSlots = {
  433: [
    { key: "st", label: "ST", x: 50, y: 8 },
    { key: "lw", label: "LW", x: 16, y: 14 },
    { key: "rw", label: "RW", x: 84, y: 14 },
    { key: "lcm", label: "CM", x: 24, y: 33 },
    { key: "cm", label: "CDM", x: 50, y: 37 },
    { key: "rcm", label: "CM", x: 76, y: 33 },
    { key: "lb", label: "LB", x: 8, y: 54 },
    { key: "lcb", label: "CB", x: 34, y: 56 },
    { key: "rcb", label: "CB", x: 66, y: 56 },
    { key: "rb", label: "RB", x: 92, y: 54 },
    { key: "gk", label: "GK", x: 50, y: 78 },
  ],
  442: [
    { key: "ls", label: "ST", x: 40, y: 10 }, { key: "rs", label: "ST", x: 60, y: 10 },
    { key: "lm", label: "LM", x: 8, y: 29 }, { key: "lcm", label: "CM", x: 36, y: 31 }, { key: "rcm", label: "CM", x: 64, y: 31 }, { key: "rm", label: "RM", x: 92, y: 29 },
    { key: "lb", label: "LB", x: 8, y: 54 }, { key: "lcb", label: "CB", x: 34, y: 56 }, { key: "rcb", label: "CB", x: 66, y: 56 }, { key: "rb", label: "RB", x: 92, y: 54 },
    { key: "gk", label: "GK", x: 50, y: 79 },
  ],
  3421: [
    { key: "st", label: "ST", x: 50, y: 8 }, { key: "lam", label: "AM", x: 38, y: 20 }, { key: "ram", label: "AM", x: 62, y: 20 },
    { key: "lwb", label: "LWB", x: 8, y: 38 }, { key: "lcm", label: "CM", x: 38, y: 42 }, { key: "rcm", label: "CM", x: 62, y: 42 }, { key: "rwb", label: "RWB", x: 92, y: 38 },
    { key: "lcb", label: "CB", x: 24, y: 58 }, { key: "cb", label: "CB", x: 50, y: 60 }, { key: "rcb", label: "CB", x: 76, y: 58 },
    { key: "gk", label: "GK", x: 50, y: 79 },
  ],
};

const subsSlots = Array.from({ length: 7 }, (_, i) => ({ key: `sub-${i + 1}`, label: `SUB ${i + 1}` }));
const reservesSlots = Array.from({ length: 8 }, (_, i) => ({ key: `res-${i + 1}`, label: `RES ${i + 1}` }));

const flagMeta = {
  USA: { png: "184", fallback: "usa" }, Nigeria: { png: "124", fallback: "nigeria" }, Jamaica: { png: "76", fallback: "jamaica" }, Mexico: { png: "110", fallback: "mexico" }, Germany: { png: "40", fallback: "germany" }, Portugal: { png: "136", fallback: "portugal" }, Argentina: { png: "9", fallback: "argentina" }, Italy: { png: "75", fallback: "italy" }, Canada: { png: "80", fallback: "canada" }, Spain: { png: "157", fallback: "spain" }, Ghana: { png: "54", fallback: "ghana" }, England: { png: "189", fallback: "england" }, France: { png: "50", fallback: "france" }, Norway: { png: "125", fallback: "norway" },
  Croatia: { fallback: "croatia" }, Liberia: { fallback: "liberia" }, Japan: { fallback: "japan" }, Netherlands: { fallback: "netherlands" }, Suriname: { fallback: "suriname" }, Lithuania: { fallback: "lithuania" }, Denmark: { fallback: "denmark" }, Peru: { fallback: "peru" }, Poland: { fallback: "poland" },
};

const pitchEl = document.getElementById("pitch");
const subsColumnEl = document.getElementById("subs-column");
const reservesColumnEl = document.getElementById("reserves-column");
const formationSelectEl = document.getElementById("formation-select");
const clearBtn = document.getElementById("clear-btn");
const cardTemplate = document.getElementById("player-card-template");

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

const lineup = new Map();
let activeSearchSlot = null;

const getPrimaryPhoto = (p) => p.explicitPhoto || `https://img.a.transfermarkt.technology/portrait/header/${p.transfermarktId}.jpg`;
const getPhotoFallback = () => "./playerface.jpg";

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
  modalTitle.textContent = player.fullName || player.displayName;
  modalBody.innerHTML = `
    <div class="modal-player">
      <img id="modal-face" src="${getPrimaryPhoto(player)}" alt="${player.fullName}" class="modal-player-face" />
      <ul>
        <li><strong>Age:</strong> ${player.age}</li>
        <li><strong>Club:</strong> ${player.club} <span id="club-flag-wrap"></span></li>
        <li><strong>Place of birth:</strong> ${player.birthCity} <span id="birth-flag-wrap"></span></li>
        <li><strong>Season appearances:</strong> ${player.seasonStats.appearances}</li>
        <li><strong>Season goals:</strong> ${player.seasonStats.goals}</li>
        <li><strong>Season assists:</strong> ${player.seasonStats.assists}</li>
        <li><strong>Eligible countries:</strong> ${player.eligibleCountries.join(", ")}</li>
      </ul>
    </div>`;
  const face = document.getElementById("modal-face");
  face.onerror = () => { face.src = getPhotoFallback(); };
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

const createPlayerCard = (player, filledSlot = false) => {
  const card = cardTemplate.content.firstElementChild.cloneNode(true);
  card.dataset.playerId = player.id;
  const face = card.querySelector(".player-face");
  face.src = getPrimaryPhoto(player);
  face.alt = player.fullName;
  face.onerror = () => { face.src = getPhotoFallback(); };
  card.querySelector(".player-last-name").textContent = player.displayName;
  card.querySelector(".player-position").textContent = player.position;
  buildFlagRow(card.querySelector(".flag-row"), player);

  card.querySelector(".info-btn").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    openInfoModal(player);
  });

  if (filledSlot) {
    const removeBtn = card.querySelector(".remove-btn");
    removeBtn.classList.add("show");
    removeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      removeFromLineup(player.id);
    });
  }

  card.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/player-id", player.id);
    e.dataTransfer.effectAllowed = "move";
  });
  return card;
};

const getUsedIds = () => new Set(lineup.values());

const renderSearchResults = () => {
  const q = slotSearchInput.value.trim().toLowerCase();
  slotSearchResults.innerHTML = "";
  const used = getUsedIds();
  players
    .filter((p) => !used.has(p.id))
    .filter((p) => `${p.fullName} ${p.displayName} ${p.position}`.toLowerCase().includes(q))
    .forEach((player) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "search-result";
      item.append(createPlayerCard(player, false));
      item.addEventListener("click", () => {
        if (activeSearchSlot) lineup.set(activeSearchSlot, player.id);
        slotSearchModal.close();
        renderAllSlots();
      });
      slotSearchResults.append(item);
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

const createSlotNode = (slot, isPitch = false) => {
  const el = document.createElement("div");
  el.className = `slot${isPitch ? " pitch-slot" : " side-slot"}`;
  if (isPitch) {
    el.style.left = `${slot.x}%`;
    el.style.top = `${slot.y}%`;
  }
  el.dataset.slotKey = slot.key;

  el.addEventListener("dragover", (e) => {
    e.preventDefault();
    el.classList.add("drop-target");
  });
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
      el.append(createPlayerCard(player, true));
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


const getRosterFileName = () => {
  const base = (rosterNameInput.value || "usmnt-roster").trim().replace(/[^a-z0-9-_]+/gi, "-").toLowerCase();
  return `${base || "usmnt-roster"}.png`;
};

const captureBoardBlob = async () => {
  const board = document.querySelector(".squad-board");
  if (!window.html2canvas || !board) throw new Error("Capture utility unavailable");
  const canvas = await window.html2canvas(board, { backgroundColor: "#4b210c", useCORS: true, scale: 2 });
  return await new Promise((resolve) => canvas.toBlob(resolve, "image/png", 1));
};

const openShareModal = async () => {
  shareStatus.textContent = "Generating image...";
  shareModal.showModal();
  try {
    const blob = await captureBoardBlob();
    if (!blob) throw new Error("Could not create image blob");
    const file = new File([blob], getRosterFileName(), { type: "image/png" });
    const objectUrl = URL.createObjectURL(blob);

    const saveImage = () => {
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = file.name;
      a.click();
    };

    const shareWithHint = async (hint) => {
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ title: rosterNameInput.value || "USMNT Roster", text: hint, files: [file] });
      } else {
        window.open(hint, "_blank");
      }
    };

    saveImageBtn.onclick = saveImage;
    emailImageBtn.onclick = () => shareWithHint(`mailto:?subject=${encodeURIComponent(rosterNameInput.value || "USMNT Roster")}&body=${encodeURIComponent("Roster image is ready. If attachment is not supported, please use Save Image first.")}`);
    textImageBtn.onclick = () => shareWithHint(`sms:?body=${encodeURIComponent("USMNT roster image ready. If image is not attached automatically, use Save Image first.")}`);

    shareStatus.textContent = "Choose Save, Email, or Text.";
  } catch (err) {
    shareStatus.textContent = `Could not generate image: ${err.message}`;
  }
};

const renderAllSlots = () => {
  pitchEl.innerHTML = "";
  subsColumnEl.innerHTML = "";
  reservesColumnEl.innerHTML = "";

  formationSlots[formationSelectEl.value].forEach((slot) => pitchEl.append(createSlotNode(slot, true)));
  subsSlots.forEach((slot) => subsColumnEl.append(createSlotNode(slot)));
  reservesSlots.forEach((slot) => reservesColumnEl.append(createSlotNode(slot)));
};

formationSelectEl.addEventListener("change", () => {
  lineup.clear();
  renderAllSlots();
});
clearBtn.addEventListener("click", () => {
  lineup.clear();
  renderAllSlots();
});

slotSearchInput.addEventListener("input", renderSearchResults);
slotSearchClose.addEventListener("click", () => slotSearchModal.close());
modalCloseBtn.addEventListener("click", () => modal.close());
shareBtn.addEventListener("click", openShareModal);
shareClose.addEventListener("click", () => shareModal.close());

renderAllSlots();
