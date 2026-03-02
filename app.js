const players = [
  { id: "pulisic", displayName: "Pulisic", position: "LW", transfermarktId: "315779", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/315779-1691696699.jpg?lm=1", age: 27, club: "AC Milan", clubCountry: "Italy", birthCity: "Hershey", birthCountry: "USA", seasonStats: { appearances: 36, goals: 15, assists: 9 }, eligibleCountries: ["USA", "Croatia"], showDualFlagsOnCard: false },
  { id: "balogun", displayName: "Balogun", position: "ST", transfermarktId: "503770", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/503770-1672838317.jpg?lm=1", age: 24, club: "AS Monaco", clubCountry: "France", birthCity: "New York", birthCountry: "USA", seasonStats: { appearances: 28, goals: 10, assists: 3 }, eligibleCountries: ["USA", "England", "Nigeria"], showDualFlagsOnCard: false },
  { id: "weah", displayName: "Weah", position: "RW", transfermarktId: "406635", age: 26, club: "Juventus", clubCountry: "Italy", birthCity: "New York", birthCountry: "USA", seasonStats: { appearances: 34, goals: 6, assists: 8 }, eligibleCountries: ["USA", "Liberia", "Jamaica", "France"], showDualFlagsOnCard: false },
  { id: "mckennie", displayName: "McKennie", position: "CM", transfermarktId: "332697", age: 27, club: "Juventus", clubCountry: "Italy", birthCity: "Little Elm", birthCountry: "USA", seasonStats: { appearances: 35, goals: 4, assists: 9 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "musah", displayName: "Musah", position: "CM", transfermarktId: "503991", age: 23, club: "AC Milan", clubCountry: "Italy", birthCity: "New York", birthCountry: "USA", seasonStats: { appearances: 31, goals: 2, assists: 3 }, eligibleCountries: ["USA", "England", "Ghana", "Italy"], showDualFlagsOnCard: false },
  { id: "adams", displayName: "Adams", position: "CDM", transfermarktId: "332705", age: 27, club: "AFC Bournemouth", clubCountry: "England", birthCity: "Wappingers Falls", birthCountry: "USA", seasonStats: { appearances: 24, goals: 1, assists: 2 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "robinson", displayName: "Robinson", position: "LB", transfermarktId: "349701", age: 29, club: "Fulham", clubCountry: "England", birthCity: "Milton Keynes", birthCountry: "England", seasonStats: { appearances: 35, goals: 1, assists: 8 }, eligibleCountries: ["USA", "England"], showDualFlagsOnCard: false },
  { id: "ream", displayName: "Ream", position: "CB", transfermarktId: "33395", age: 38, club: "Charlotte FC", clubCountry: "USA", birthCity: "St. Louis", birthCountry: "USA", seasonStats: { appearances: 25, goals: 1, assists: 1 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "richards", displayName: "Richards", position: "CB", transfermarktId: "434435", age: 26, club: "Crystal Palace", clubCountry: "England", birthCity: "Birmingham, Alabama", birthCountry: "USA", seasonStats: { appearances: 27, goals: 1, assists: 1 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "dest", displayName: "Dest", position: "RB", transfermarktId: "361104", age: 25, club: "PSV", clubCountry: "Netherlands", birthCity: "Almere", birthCountry: "Netherlands", seasonStats: { appearances: 30, goals: 2, assists: 6 }, eligibleCountries: ["USA", "Netherlands", "Suriname"], showDualFlagsOnCard: false },
  { id: "turner", displayName: "Turner", position: "GK", transfermarktId: "312151", age: 32, club: "Nottingham Forest", clubCountry: "England", birthCity: "Park Ridge", birthCountry: "USA", seasonStats: { appearances: 20, goals: 0, assists: 0 }, eligibleCountries: ["USA", "Lithuania"], showDualFlagsOnCard: false },
  { id: "pepi", displayName: "Pepi", position: "ST", transfermarktId: "628264", age: 23, club: "PSV", clubCountry: "Netherlands", birthCity: "El Paso", birthCountry: "USA", seasonStats: { appearances: 32, goals: 14, assists: 4 }, eligibleCountries: ["USA", "Mexico"], showDualFlagsOnCard: false },
  { id: "reyna", displayName: "Reyna", position: "CAM", transfermarktId: "504215", age: 24, club: "Borussia Dortmund", clubCountry: "Germany", birthCity: "Sunderland", birthCountry: "England", seasonStats: { appearances: 21, goals: 3, assists: 4 }, eligibleCountries: ["USA", "England", "Argentina", "Portugal"], showDualFlagsOnCard: false },
  { id: "scally", displayName: "Scally", position: "RB", transfermarktId: "504153", age: 23, club: "Borussia Mönchengladbach", clubCountry: "Germany", birthCity: "Lake Grove", birthCountry: "USA", seasonStats: { appearances: 33, goals: 2, assists: 3 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "koleosho", displayName: "Koleosho", position: "LW", transfermarktId: "1058291", age: 20, club: "Burnley", clubCountry: "England", birthCity: "Norwalk", birthCountry: "USA", seasonStats: { appearances: 24, goals: 2, assists: 4 }, eligibleCountries: ["USA", "Italy", "Nigeria"], showDualFlagsOnCard: true },
  { id: "culbreath", displayName: "Culbreath", position: "ST", transfermarktId: "1173321", age: 19, club: "SC Freiburg II", clubCountry: "Germany", birthCity: "Munich", birthCountry: "Germany", seasonStats: { appearances: 18, goals: 5, assists: 2 }, eligibleCountries: ["USA", "Germany"], showDualFlagsOnCard: true },
  { id: "west", displayName: "West", position: "CM", transfermarktId: "1216497", age: 18, club: "Vålerenga", clubCountry: "Norway", birthCity: "Oslo", birthCountry: "Norway", seasonStats: { appearances: 16, goals: 1, assists: 3 }, eligibleCountries: ["USA", "Norway"], showDualFlagsOnCard: true },
  { id: "emenalo", displayName: "Emenalo", position: "CAM", transfermarktId: "1018780", age: 17, club: "Chelsea U21", clubCountry: "England", birthCity: "London", birthCountry: "England", seasonStats: { appearances: 17, goals: 6, assists: 4 }, eligibleCountries: ["USA", "England", "Nigeria"], showDualFlagsOnCard: true },
  { id: "chase", displayName: "Chase", position: "CB", transfermarktId: "1026422", age: 20, club: "VfB Stuttgart II", clubCountry: "Germany", birthCity: "Yokosuka", birthCountry: "Japan", seasonStats: { appearances: 20, goals: 1, assists: 1 }, eligibleCountries: ["USA", "Japan"], showDualFlagsOnCard: true },
  { id: "banks", displayName: "Banks", position: "CB", transfermarktId: "1043328", age: 18, club: "FC Augsburg", clubCountry: "Germany", birthCity: "Honolulu", birthCountry: "USA", seasonStats: { appearances: 19, goals: 1, assists: 0 }, eligibleCountries: ["USA", "Germany"], showDualFlagsOnCard: true },
  { id: "morris", displayName: "A. Morris", position: "CM", transfermarktId: "531066", age: 24, club: "Middlesbrough", clubCountry: "England", birthCity: "Fort Lauderdale", birthCountry: "USA", seasonStats: { appearances: 34, goals: 2, assists: 5 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "mcglynn", displayName: "McGlynn", position: "CM", transfermarktId: "829303", age: 22, club: "Philadelphia Union", clubCountry: "USA", birthCity: "Middletown", birthCountry: "USA", seasonStats: { appearances: 33, goals: 4, assists: 7 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "pukstas", displayName: "Pukstas", position: "CM", transfermarktId: "918784", age: 21, club: "Hajduk Split", clubCountry: "Croatia", birthCity: "Stillwater", birthCountry: "USA", seasonStats: { appearances: 30, goals: 4, assists: 3 }, eligibleCountries: ["USA", "Lithuania"], showDualFlagsOnCard: false },
  { id: "paredes", displayName: "Paredes", position: "LW", transfermarktId: "664011", age: 22, club: "VfL Wolfsburg", clubCountry: "Germany", birthCity: "South Riding", birthCountry: "USA", seasonStats: { appearances: 27, goals: 3, assists: 4 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "luna", displayName: "Luna", position: "CAM", transfermarktId: "805385", age: 21, club: "Real Salt Lake", clubCountry: "USA", birthCity: "Sunnyvale", birthCountry: "USA", seasonStats: { appearances: 31, goals: 8, assists: 9 }, eligibleCountries: ["USA", "Mexico"], showDualFlagsOnCard: false },
  { id: "lund", displayName: "Lund", position: "LB", transfermarktId: "346292", age: 23, club: "Palermo", clubCountry: "Italy", birthCity: "Kerteminde", birthCountry: "Denmark", seasonStats: { appearances: 29, goals: 1, assists: 4 }, eligibleCountries: ["USA", "Denmark"], showDualFlagsOnCard: false },
  { id: "tillman", displayName: "Tillman", position: "CAM", transfermarktId: "467437", age: 23, club: "PSV", clubCountry: "Netherlands", birthCity: "Nuremberg", birthCountry: "Germany", seasonStats: { appearances: 34, goals: 9, assists: 10 }, eligibleCountries: ["USA", "Germany"], showDualFlagsOnCard: false },
  { id: "brenden-aaronson", displayName: "B. Aaronson", position: "CAM", transfermarktId: "393323", age: 24, club: "Union Berlin", clubCountry: "Germany", birthCity: "Medford", birthCountry: "USA", seasonStats: { appearances: 32, goals: 4, assists: 6 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "paxten-aaronson", displayName: "P. Aaronson", position: "CAM", transfermarktId: "668455", age: 21, club: "Eintracht Frankfurt", clubCountry: "Germany", birthCity: "Medford", birthCountry: "USA", seasonStats: { appearances: 28, goals: 5, assists: 4 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
  { id: "haji-wright", displayName: "H. Wright", position: "ST", transfermarktId: "315767", age: 27, club: "Coventry City", clubCountry: "England", birthCity: "Los Angeles", birthCountry: "USA", seasonStats: { appearances: 33, goals: 13, assists: 5 }, eligibleCountries: ["USA", "Liberia"], showDualFlagsOnCard: false },
  { id: "agyemang", displayName: "Agyemang", position: "ST", transfermarktId: "987817", age: 24, club: "Charlotte FC", clubCountry: "USA", birthCity: "East Hartford", birthCountry: "USA", seasonStats: { appearances: 29, goals: 11, assists: 3 }, eligibleCountries: ["USA", "Ghana"], showDualFlagsOnCard: true },
  { id: "sands", displayName: "Sands", position: "CDM", transfermarktId: "478321", age: 25, club: "St. Pauli", clubCountry: "Germany", birthCity: "Rye", birthCountry: "USA", seasonStats: { appearances: 31, goals: 1, assists: 2 }, eligibleCountries: ["USA"], showDualFlagsOnCard: false },
];

const formations = {
  433: [
    { key: "gk", label: "GK", x: 50, y: 90 },
    { key: "lb", label: "LB", x: 8, y: 70 },
    { key: "lcb", label: "CB", x: 34, y: 72 },
    { key: "rcb", label: "CB", x: 66, y: 72 },
    { key: "rb", label: "RB", x: 92, y: 70 },
    { key: "lcm", label: "CM", x: 24, y: 50 },
    { key: "cm", label: "CDM", x: 50, y: 56 },
    { key: "rcm", label: "CM", x: 76, y: 50 },
    { key: "lw", label: "LW", x: 16, y: 24 },
    { key: "st", label: "ST", x: 50, y: 20 },
    { key: "rw", label: "RW", x: 84, y: 24 },
  ],
  442: [
    { key: "gk", label: "GK", x: 50, y: 90 },
    { key: "lb", label: "LB", x: 8, y: 70 },
    { key: "lcb", label: "CB", x: 34, y: 72 },
    { key: "rcb", label: "CB", x: 66, y: 72 },
    { key: "rb", label: "RB", x: 92, y: 70 },
    { key: "lm", label: "LM", x: 8, y: 46 },
    { key: "lcm", label: "CM", x: 36, y: 48 },
    { key: "rcm", label: "CM", x: 64, y: 48 },
    { key: "rm", label: "RM", x: 92, y: 46 },
    { key: "ls", label: "ST", x: 40, y: 24 },
    { key: "rs", label: "ST", x: 60, y: 24 },
  ],
  3421: [
    { key: "gk", label: "GK", x: 50, y: 90 },
    { key: "lcb", label: "CB", x: 24, y: 72 },
    { key: "cb", label: "CB", x: 50, y: 74 },
    { key: "rcb", label: "CB", x: 76, y: 72 },
    { key: "lwb", label: "LWB", x: 8, y: 52 },
    { key: "lcm", label: "CM", x: 38, y: 56 },
    { key: "rcm", label: "CM", x: 62, y: 56 },
    { key: "rwb", label: "RWB", x: 92, y: 52 },
    { key: "lam", label: "AM", x: 38, y: 32 },
    { key: "ram", label: "AM", x: 62, y: 32 },
    { key: "st", label: "ST", x: 50, y: 18 },
  ],
};

const flagMeta = {
  USA: { png: "184", fallback: "usa" }, Nigeria: { png: "124", fallback: "nigeria" }, Jamaica: { png: "76", fallback: "jamaica" }, Mexico: { png: "110", fallback: "mexico" }, Germany: { png: "40", fallback: "germany" }, Portugal: { png: "136", fallback: "portugal" }, Argentina: { png: "9", fallback: "argentina" }, Italy: { png: "75", fallback: "italy" }, Canada: { png: "80", fallback: "canada" }, Spain: { png: "157", fallback: "spain" }, Ghana: { png: "54", fallback: "ghana" }, England: { png: "189", fallback: "england" }, France: { png: "50", fallback: "france" },
  Croatia: { fallback: "croatia" }, Liberia: { fallback: "liberia" }, Norway: { fallback: "norway" }, Japan: { fallback: "japan" }, Netherlands: { fallback: "netherlands" }, Suriname: { fallback: "suriname" }, Lithuania: { fallback: "lithuania" }, Denmark: { fallback: "denmark" },
};

const playerListEl = document.getElementById("player-list");
const playerSearchEl = document.getElementById("player-search");
const formationSelectEl = document.getElementById("formation-select");
const pitchEl = document.getElementById("pitch");
const cardTemplate = document.getElementById("player-card-template");
const clearBtn = document.getElementById("clear-btn");
const modal = document.getElementById("player-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalCloseBtn = document.getElementById("modal-close");

const lineup = new Map();
const defaultPoolMessage = "Type a player name to search the pool.";

const getPrimaryPhoto = (player) => player.explicitPhoto || `https://img.a.transfermarkt.technology/portrait/header/${player.transfermarktId}.jpg`;
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
    img.loading = "lazy";
    img.addEventListener("error", () => img.remove());
    wrap.append(img);
  }
  return wrap;
};

const buildFlagRow = (container, player) => {
  container.innerHTML = "";
  const flags = player.showDualFlagsOnCard ? player.eligibleCountries : ["USA"];
  flags.forEach((country) => container.append(createFlag(country)));
};

const openPlayerModal = (player) => {
  modalTitle.textContent = `${player.displayName} (${player.position})`;
  modalBody.innerHTML = `
    <div class="modal-player">
      <img src="${getPrimaryPhoto(player)}" alt="${player.displayName}" class="modal-player-face" id="modal-face" />
      <ul>
        <li><strong>Age:</strong> ${player.age}</li>
        <li><strong>Club:</strong> ${player.club} <span id="club-flag-wrap"></span></li>
        <li><strong>Place of birth:</strong> ${player.birthCity} <span id="birth-flag-wrap"></span></li>
        <li><strong>Season appearances:</strong> ${player.seasonStats.appearances}</li>
        <li><strong>Season goals:</strong> ${player.seasonStats.goals}</li>
        <li><strong>Season assists:</strong> ${player.seasonStats.assists}</li>
        <li><strong>Eligible countries:</strong> ${player.eligibleCountries.join(", ")}</li>
      </ul>
    </div>
  `;

  const modalFace = document.getElementById("modal-face");
  modalFace.onerror = () => { modalFace.src = getPhotoFallback(); };
  document.getElementById("club-flag-wrap").append(createFlag(player.clubCountry));
  document.getElementById("birth-flag-wrap").append(createFlag(player.birthCountry));
  modal.showModal();
};

const removeFromLineup = (playerId) => {
  const existingSlot = [...lineup.entries()].find(([, id]) => id === playerId)?.[0];
  if (!existingSlot) return;
  lineup.delete(existingSlot);
  renderPitch();
  renderPlayerList();
};

const createPlayerCard = (player, inLineup = false) => {
  const card = cardTemplate.content.firstElementChild.cloneNode(true);
  card.dataset.playerId = player.id;

  const face = card.querySelector(".player-face");
  face.src = getPrimaryPhoto(player);
  face.alt = player.displayName;
  face.onerror = () => { face.src = getPhotoFallback(); };

  card.querySelector(".player-last-name").textContent = player.displayName;
  card.querySelector(".player-position").textContent = player.position;
  buildFlagRow(card.querySelector(".flag-row"), player);

  const removeBtn = card.querySelector(".remove-btn");
  if (inLineup) {
    removeBtn.classList.add("show");
    removeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      removeFromLineup(player.id);
    });
  }

  card.querySelector(".info-btn").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openPlayerModal(player);
  });

  card.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/player-id", player.id);
    event.dataTransfer.effectAllowed = "copyMove";
  });

  return card;
};

const renderPlayerList = () => {
  const query = playerSearchEl.value.trim().toLowerCase();
  playerListEl.innerHTML = "";

  if (!query) {
    const msg = document.createElement("p");
    msg.className = "pool-hint";
    msg.textContent = defaultPoolMessage;
    playerListEl.append(msg);
    return;
  }

  const used = new Set(lineup.values());
  players
    .filter((player) => !used.has(player.id))
    .filter((player) => `${player.displayName} ${player.position}`.toLowerCase().includes(query))
    .forEach((player) => playerListEl.append(createPlayerCard(player)));
};

const onDrop = (event) => {
  event.preventDefault();
  const playerId = event.dataTransfer.getData("text/player-id");
  const slotKey = event.currentTarget.dataset.slotKey;
  const existingSlot = [...lineup.entries()].find(([, id]) => id === playerId)?.[0];
  if (existingSlot) lineup.delete(existingSlot);
  lineup.set(slotKey, playerId);
  renderPitch();
  renderPlayerList();
};

const renderPitch = () => {
  pitchEl.innerHTML = "";
  formations[formationSelectEl.value].forEach((slot) => {
    const slotEl = document.createElement("div");
    slotEl.className = "slot";
    slotEl.dataset.slotKey = slot.key;
    slotEl.style.left = `${slot.x}%`;
    slotEl.style.top = `${slot.y}%`;

    slotEl.addEventListener("dragover", (event) => {
      event.preventDefault();
      slotEl.classList.add("drop-target");
      event.dataTransfer.dropEffect = "move";
    });
    slotEl.addEventListener("dragleave", () => slotEl.classList.remove("drop-target"));
    slotEl.addEventListener("drop", (event) => {
      slotEl.classList.remove("drop-target");
      onDrop(event);
    });

    const playerId = lineup.get(slot.key);
    if (playerId) {
      const player = players.find((item) => item.id === playerId);
      if (player) slotEl.append(createPlayerCard(player, true));
    } else {
      const label = document.createElement("span");
      label.className = "slot-label";
      label.textContent = slot.label;
      slotEl.append(label);
    }

    pitchEl.append(slotEl);
  });
};

formationSelectEl.addEventListener("change", () => {
  lineup.clear();
  renderPitch();
  renderPlayerList();
});
playerSearchEl.addEventListener("input", renderPlayerList);
clearBtn.addEventListener("click", () => {
  lineup.clear();
  renderPitch();
  renderPlayerList();
});
modalCloseBtn.addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const inside = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
  if (!inside) modal.close();
});

renderPlayerList();
renderPitch();
