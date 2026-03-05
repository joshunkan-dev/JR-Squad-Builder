const { players, flagMeta } = window.USMNT_DATA;

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
const submitBtn = document.getElementById("filter-submit");
const resultsEl = document.getElementById("db-results");
const resultCountEl = document.getElementById("result-count");
const paginationEl = document.getElementById("pagination");
const quickSearchInput = document.getElementById("quick-player-search");
const quickSearchDropdown = document.getElementById("quick-search-dropdown");

const getPhotoFallback = () => "./playerface.jpg";
const proxyPhoto = (url) => `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ""))}`;

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

const getHeight = (player) => player.height || `5'11"`;

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
        <li><strong>Other positions:</strong> ${player.otherPositions.length ? player.otherPositions.join(", ") : "—"}</li>
        <li><strong>Eligible countries:</strong> ${player.eligibleCountries.join(", ")}</li>
      </ul>
    </div>`;
  const face = document.getElementById("modal-face");
  bindPlayerImage(face, player.explicitPhoto);
  document.getElementById("club-flag-wrap").append(createFlag(player.clubCountry));
  document.getElementById("birth-flag-wrap").append(createFlag(player.birthCountry));
  modal.showModal();
};

const buildCountryOptions = () => {
  const eligibleCountries = [...new Set(players.flatMap((p) => p.eligibleCountries))].sort((a, b) => a.localeCompare(b));
  const clubCountries = ["USA", "England", "Spain", "Italy", "Germany", "France", "Mexico", "Netherlands", "Rest of the World"];

  eligibleCountrySelect.innerHTML = `<option value="">Any</option>${eligibleCountries.map((c) => `<option value="${c}">${c}</option>`).join("")}`;
  clubCountrySelect.innerHTML = `<option value="">Any</option>${clubCountries.map((c) => `<option value="${c}">${c}</option>`).join("")}`;
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

  return players.filter((p) => {
    const isDual = p.eligibleCountries.length > 1;
    const passDual = dualFilter === "all" || (dualFilter === "dual" && isDual) || (dualFilter === "uncapped" && p.showDualFlagsOnCard);
    return (`${p.fullName} ${p.displayName}`.toLowerCase().includes(q)
      && positionMatches(p, position)
      && getLiveAge(p) >= ageMin
      && getLiveAge(p) <= ageMax
      && clubCountryMatches(p, clubCountry)
      && (!eligibleCountry || p.eligibleCountries.includes(eligibleCountry))
      && passDual);
  });
};

const renderPagination = (totalPages) => {
  paginationEl.innerHTML = "";
  if (totalPages <= 1) return;

  const createPageButton = (label, page, isActive = false) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `page-btn${isActive ? " active" : ""}`;
    btn.textContent = label;
    btn.addEventListener("click", () => {
      currentPage = page;
      renderPlayers();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return btn;
  };

  if (currentPage > 1) {
    paginationEl.append(createPageButton("◀", currentPage - 1));
  }

  const maxButtons = 6;
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, start + maxButtons - 1);
  for (let i = start; i <= end; i += 1) {
    paginationEl.append(createPageButton(String(i), i, i === currentPage));
  }

  if (currentPage < totalPages) {
    paginationEl.append(createPageButton("▶", currentPage + 1));
  }
};


const renderQuickSearch = () => {
  if (!quickSearchInput || !quickSearchDropdown) return;
  const q = quickSearchInput.value.trim().toLowerCase();
  quickSearchDropdown.innerHTML = "";
  if (q.length < 2) {
    quickSearchDropdown.style.display = "none";
    return;
  }
  const matches = players
    .filter((p) => `${p.fullName} ${p.displayName}`.toLowerCase().includes(q))
    .slice(0, 8);
  if (!matches.length) {
    quickSearchDropdown.style.display = "none";
    return;
  }
  matches.forEach((player) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "quick-search-item";
    item.textContent = `${player.displayName} · ${player.position}`;
    item.addEventListener("click", () => {
      quickSearchInput.value = player.displayName;
      quickSearchDropdown.style.display = "none";
      openInfoModal(player);
    });
    quickSearchDropdown.append(item);
  });
  quickSearchDropdown.style.display = "block";
};

const renderPlayers = () => {
  const filtered = getFilteredPlayers();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pagedPlayers = filtered.slice(start, start + PAGE_SIZE);

  resultsEl.innerHTML = "";
  resultCountEl.textContent = `${filtered.length} players`;

  pagedPlayers.forEach((player) => {
    const row = document.createElement("article");
    row.className = "db-player-row";

    const img = document.createElement("img");
    img.className = "db-player-face";
    img.alt = player.fullName;
    bindPlayerImage(img, player.explicitPhoto);

    const name = document.createElement("h3");
    name.textContent = player.displayName;

    const primary = document.createElement("p");
    primary.className = "db-primary-position";
    primary.textContent = player.position;

    const club = document.createElement("p");
    club.textContent = player.club;

    const info = document.createElement("button");
    info.className = "info-btn";
    info.innerHTML = "<em>i</em>";
    info.addEventListener("click", () => openInfoModal(player));

    const flags = document.createElement("div");
    flags.className = "flag-row";
    const cardFlags = player.showDualFlagsOnCard ? player.eligibleCountries : ["USA"];
    cardFlags.forEach((country) => flags.append(createFlag(country)));

    const left = document.createElement("div");
    left.className = "db-player-main";
    left.append(name, primary, flags, club);

    row.append(img, left, info);
    resultsEl.append(row);
  });

  renderPagination(totalPages);
};

submitBtn.addEventListener("click", () => {
  currentPage = 1;
  renderPlayers();
});
modalCloseBtn.addEventListener("click", () => modal.close());
quickSearchInput?.addEventListener("input", renderQuickSearch);
document.addEventListener("click", (e) => {
  if (!quickSearchDropdown || !quickSearchInput) return;
  if (!quickSearchDropdown.contains(e.target) && e.target !== quickSearchInput) quickSearchDropdown.style.display = "none";
});

buildCountryOptions();
renderPlayers();
