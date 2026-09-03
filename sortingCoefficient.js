/*
 * Default database ranking
 *
 * Ranking is intentionally lexicographic rather than a loose weighted average:
 *   1. Top-five European top flights
 *   2. North American top flights (MLS, Liga MX, Canadian Premier League)
 *   3. Every other league
 *
 * Within a league tier, attacking players and wingers appear before midfielders,
 * defenders, and goalkeepers. Younger players then appear first within each
 * positional group. This keeps a league-tier difference from being erased by a
 * small age or position difference.
 */

const TOP_FIVE_COUNTRIES = new Set(["England", "Spain", "Italy", "Germany", "France"]);
const NORTH_AMERICAN_COUNTRIES = new Set(["USA", "Canada", "Mexico"]);

// These clubs play outside their country's top flight. The player data does not
// include a league field, so this small exception list keeps the ranking honest.
const NON_TOP_FIVE_CLUBS = new Set([
  "Celtic",
  "Charlton Athletic",
  "Coventry City",
  "Middlesbrough",
  "West Bromwich Albion",
  "Cesena",
  "Palermo",
  "Parma",
  "Venezia",
  "Holstein Kiel",
  "SC Paderborn",
]);

const POSITION_RANKINGS = {
  LW: 600,
  RW: 600,
  ST: 590,
  CF: 590,
  RM: 500,
  LM: 500,
  CAM: 490,
  RAM: 490,
  LAM: 490,
  CM: 400,
  RCM: 400,
  LCM: 400,
  CDM: 390,
  DM: 390,
  LWB: 300,
  RWB: 300,
  LB: 290,
  RB: 290,
  CB: 280,
  GK: 100,
};

const normalizeClubName = (club = "") => club
  .replace(/\s*\(loan\)\s*/i, "")
  .trim();

const getLiveAge = (player) => {
  const dob = player.dateOfBirth || player.birthDate;
  if (!dob) return Number(player.age) || 99;
  const born = new Date(dob);
  if (Number.isNaN(born.getTime())) return Number(player.age) || 99;
  const today = new Date();
  let age = today.getFullYear() - born.getFullYear();
  const monthDifference = today.getMonth() - born.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < born.getDate())) age -= 1;
  return age;
};

const getLeagueTier = (player) => {
  const club = normalizeClubName(player.club);
  if (TOP_FIVE_COUNTRIES.has(player.clubCountry) && !NON_TOP_FIVE_CLUBS.has(club)) return 3;
  if (NORTH_AMERICAN_COUNTRIES.has(player.clubCountry) && club !== "Derby County") return 2;
  return 1;
};

const getPositionScore = (position) => POSITION_RANKINGS[position] || 0;

const calculateSortingCoefficient = (player) => {
  const leagueTier = getLeagueTier(player);
  const positionScore = getPositionScore(player.position);
  const age = getLiveAge(player);

  // League tier dominates. Position breaks ties within a tier, followed by age.
  return leagueTier * 10000 + positionScore * 10 + Math.max(0, 100 - age);
};

const sortPlayersByCoefficient = (players) => [...players].sort((a, b) => {
  const scoreDifference = calculateSortingCoefficient(b) - calculateSortingCoefficient(a);
  if (scoreDifference) return scoreDifference;
  return (a.displayName || a.fullName || "").localeCompare(b.displayName || b.fullName || "");
});

window.PlayerSorting = {
  calculateSortingCoefficient,
  getLeagueTier,
  getLiveAge,
  getPositionScore,
  sortPlayersByCoefficient,
};
