//const { players, flagMeta } = window.USMNT_DATA;
let players = []
let flagMeta = []

const PAGE_SIZE = 12;
let currentPage = 1;

const positionBuckets = {
  ST: ["ST"],
  winger: ["LW", "LWB", "LM", "RM", "RWB", "RW"],
  "center-mid": ["CM", "CAM", "CDM"],
  fullback: ["LB", "RB", "LWB", "RWB"],
  "center-back": ["CB"],
  GK: ["GK"],
};

// UI Elements
const modal = document.getElementById("player-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalCloseBtn = document.getElementById("modal-close");
const nameInput = document.getElementById("filter-name");
const positionSelect = document.getElementById("filter-position");
const ageMinInput = document.getElementById("filter-age-min");
const ageMaxInput = document.getElementById("filter-age-max");
const clubCountrySelect = document.getElementById("filter-club-country");
const eligibleCountrySelect = document.getElementById("filter-eligible-country");
const dualSelect = document.getElementById("filter-dual");
const resultsEl = document.getElementById("db-results");
const resultCountEl = document.getElementById("result-count");
const paginationEl = document.getElementById("pagination");
const quickSearchInput = document.getElementById("quick-player-search");
const quickSearchDropdown = document.getElementById("quick-search-dropdown");

// Helper Functions
const getEligibleCountries = (player) => Array.isArray(player.eligibleCountries) ? player.eligibleCountries : [];
const getOtherPositions = (player) => Array.isArray(player.otherPositions) ? player.otherPositions : [];
const getPhotoFallback = () => "./playerface.jpg";
const proxyPhoto = (url) => `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ""))}`;

// FIX: Point to the version in sortingCoefficient.js instead of redeclaring
const getLiveAge = (player) => window.PlayerSorting.getLiveAge(player);

const getHeight = (player) => {
  if (player.heightVerified && player.height) return player.height;
  return "Pending source verification";
};

const bindPlayerImage = (imgEl, url) => {
  if (!url) {
    imgEl.src = getPhotoFallback();
    return;
  }
  let stage = 0;
  imgEl.crossOrigin = "anonymous";
  imgEl.referrerPolicy = "no-referrer";
  imgEl.src = proxyPhoto(url);
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
        <li><strong>Age:</strong> ${getLiveAge(player)}</li>
        <li><strong>Club:</strong> ${player.club} <span id="club-flag-wrap"></span></li>
        <li><strong>Place of birth:</strong> ${player.birthCity} <span id="birth-flag-wrap"></span></li>
        <li><strong>Height:</strong> ${getHeight(player)}</li>
        <li><strong>Dominant foot:</strong> ${player.dominantFoot}</li>
        <li><strong>Other positions:</strong> ${getOtherPositions(player).length ? getOtherPositions(player).join(", ") : "—"}</li>
        <li><strong>Eligible countries:</strong> ${getEligibleCountries(player).join(", ") || "—"}</li>
      </ul>
    </div>`;
  const face = document.getElementById("modal-face");
  bindPlayerImage(face, player.explicitPhoto);
  document.getElementById("club-flag-wrap").append(createFlag(player.clubCountry));
  document.getElementById("birth-flag-wrap").append(createFlag(player.birthCountry));
  modal.showModal();
};

const clubCountryMatches = (player, filterValue) => {
  if (!filterValue) return true;
  if (filterValue === "Rest of the World") {
    return !["USA", "England", "Spain", "Italy", "Germany", "France", "Mexico", "Netherlands"].includes(player.clubCountry);
  }
  return player.clubCountry === filterValue;
};

const positionMatches = (player, filterValue) => {
  if (!filterValue) return true;
  const bucket = positionBuckets[filterValue] || [];
  return bucket.includes(player.position);
};

const getFilteredPlayers = () => {
  const q = nameInput.value.trim().toLowerCase();
  const ageMin = Number(ageMinInput.value || 0);
  const ageMax = Number(ageMaxInput.value || 100);
  const position = positionSelect.value;
  const clubCountry = clubCountrySelect.value;
  const eligibleCountry = eligibleCountrySelect.value;
  const dualFilter = dualSelect.value;

  const filtered = players.filter((p) => {
    const eligibleCountries = getEligibleCountries(p);
    const isDual = eligibleCountries.length > 1;
    const passDual = dualFilter === "all" || (dualFilter === "dual" && isDual) || (dualFilter === "uncapped" && p.showDualFlagsOnCard);
    return (`${p.fullName} ${p.displayName}`.toLowerCase().includes(q)
      && positionMatches(p, position)
      && getLiveAge(p) >= ageMin
      && getLiveAge(p) <= ageMax
      && clubCountryMatches(p, clubCountry)
      && (!eligibleCountry || eligibleCountries.includes(eligibleCountry))
      && passDual);
  });
  return window.PlayerSorting.sortPlayersByCoefficient(filtered);
};

const renderPlayers = () => {
  const filtered = getFilteredPlayers();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pagedPlayers = filtered.slice(start, start + PAGE_SIZE);

  resultsEl.innerHTML = "";
  resultCountEl.textContent = `${filtered.length} players · ranked by coefficient`;

  pagedPlayers.forEach((player) => {
    const row = document.createElement("article");
    row.className = "db-player-row";
    const img = document.createElement("img");
    img.className = "db-player-face";
    bindPlayerImage(img, player.explicitPhoto);
    const name = document.createElement("h3");
    name.textContent = player.displayName;
    const info = document.createElement("button");
    info.className = "info-btn";
    info.innerHTML = "<em>i</em>";
    info.addEventListener("click", () => openInfoModal(player));
    row.append(img, name, info);
    resultsEl.append(row);
  });
};

// Initialize listeners
if(document.getElementById("filter-submit")) {
  document.getElementById("filter-submit").addEventListener("click", () => {
    currentPage = 1;
    renderPlayers();
  });
}

// Initial Load
window.addEventListener("DOMContentLoaded", () => {
  // Grab the data here, after all scripts have loaded
  const data = window.USMNT_DATA || { players: [], flagMeta: {} };
  players = data.players;
  flagMeta = data.flagMeta;
  renderPlayers();
});
