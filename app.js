const players = [
  { id: "pulisic", fullName: "Christian Pulisic", displayName: "Pulisic", position: "RW", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/315779-1691696699.jpg?lm=1", age: 27, club: "AC Milan", clubCountry: "Italy", birthCity: "Hershey", birthCountry: "USA", eligibleCountries: ["USA", "Croatia"], dominantFoot: "Right", otherPositions: ["LW", "CAM"], showDualFlagsOnCard: false },
  { id: "balogun", fullName: "Folarin Balogun", displayName: "Balogun", position: "ST", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/503770-1672838317.jpg?lm=1", age: 24, club: "AS Monaco", clubCountry: "France", birthCity: "New York", birthCountry: "USA", eligibleCountries: ["USA", "England", "Nigeria"], dominantFoot: "Right", otherPositions: ["CF"], showDualFlagsOnCard: false },
  { id: "weah", fullName: "Timothy Weah", displayName: "Weah", position: "RM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/370846-1692277669.jpg?lm=1", age: 26, club: "Olympique Marseille", clubCountry: "France", birthCity: "New York", birthCountry: "USA", eligibleCountries: ["USA", "Liberia", "Jamaica", "France"], dominantFoot: "Right", otherPositions: ["RWB", "LW", "ST"], showDualFlagsOnCard: false },
  { id: "mckennie", fullName: "Weston McKennie", displayName: "McKennie", position: "CM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/332697-1754245044.jpg?lm=1", age: 27, club: "Juventus", clubCountry: "Italy", birthCity: "Little Elm", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Right", otherPositions: ["CAM", "RM", "RWB"], showDualFlagsOnCard: false },
  { id: "musah", fullName: "Yunus Musah", displayName: "Musah", position: "CDM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/503991-1684913655.jpg?lm=1", age: 23, club: "Atalanta", clubCountry: "Italy", birthCity: "New York", birthCountry: "USA", eligibleCountries: ["USA", "England", "Ghana", "Italy"], dominantFoot: "Right", otherPositions: ["CM", "RM"], showDualFlagsOnCard: false },
  { id: "tessmann", fullName: "Tanner Tessmann", displayName: "Tessmann", position: "CM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/670096-1722196121.jpg?lm=1", age: 24, club: "Olympique Lyon", clubCountry: "France", birthCity: "Birmingham", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Right", otherPositions: ["CDM"], showDualFlagsOnCard: false },
  { id: "cardoso", fullName: "Johnny Cardoso", displayName: "Johnny", position: "CM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/689505-1742036970.jpg?lm=1", age: 24, club: "Atlético Madrid", clubCountry: "Spain", birthCity: "Denville", birthCountry: "USA", eligibleCountries: ["USA", "Brazil"], dominantFoot: "Right", otherPositions: ["CDM"], showDualFlagsOnCard: false },
  { id: "adams", fullName: "Tyler Adams", displayName: "Adams", position: "CDM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/332705-1754244571.jpg?lm=1", age: 27, club: "AFC Bournemouth", clubCountry: "England", birthCity: "Wappingers Falls", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Right", otherPositions: [], showDualFlagsOnCard: false },
  { id: "robinson", fullName: "Antonee 'Jedi' Robinson", displayName: "A. Robinson", position: "LB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/349701-1703926612.jpg?lm=1", age: 28, club: "Fulham", clubCountry: "England", birthCity: "Milton Keynes", birthCountry: "England", eligibleCountries: ["USA", "England"], dominantFoot: "Left", otherPositions: ["LWB"], showDualFlagsOnCard: false },
  { id: "ream", fullName: "Tim Ream", displayName: "Ream", position: "CB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/145466-1771611843.jpg?lm=1", age: 38, club: "Charlotte FC", clubCountry: "USA", birthCity: "St. Louis", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Left", otherPositions: [], showDualFlagsOnCard: false },
  { id: "richards", fullName: "Chris Richards", displayName: "Richards", position: "CB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/578539-1754244701.jpg?lm=1", age: 26, club: "Crystal Palace", clubCountry: "England", birthCity: "Birmingham, Alabama", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Right", otherPositions: ["RB"], showDualFlagsOnCard: false },
  { id: "scally", fullName: "Joe Scally", displayName: "Scally", position: "RB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/504153-1760967039.jpg?lm=1", age: 23, club: "Borussia Mönchengladbach", clubCountry: "Germany", birthCity: "Lake Grove", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Right", otherPositions: ["LCB", "RCB"], showDualFlagsOnCard: false },
  { id: "dest", fullName: "Sergiño Dest", displayName: "Dest", position: "RB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/361104-1713981952.jpg?lm=1", age: 25, club: "PSV", clubCountry: "Netherlands", birthCity: "Almere", birthCountry: "Netherlands", eligibleCountries: ["USA", "Netherlands", "Suriname"], dominantFoot: "Right", otherPositions: ["LB", "RW"], showDualFlagsOnCard: false },
  { id: "turner", fullName: "Matt Turner", displayName: "Turner", position: "GK", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/425306-1771708610.jpg?lm=1", age: 32, club: "New England Revolution (loan)", clubCountry: "USA", birthCity: "Park Ridge", birthCountry: "USA", eligibleCountries: ["USA", "Lithuania"], dominantFoot: "Right", otherPositions: [], showDualFlagsOnCard: false },
  { id: "freese", fullName: "Matt Freese", displayName: "Freese", position: "GK", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/500309-1771710880.jpg?lm=1", age: 26, club: "New York City FC", clubCountry: "USA", birthCity: "Wayne", birthCountry: "USA", eligibleCountries: ["USA", "Germany"], dominantFoot: "Right", otherPositions: [], showDualFlagsOnCard: false },
  { id: "brady", fullName: "Chris Brady", displayName: "C. Brady", position: "GK", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/765504-1771695668.jpg?lm=1", age: 21, club: "Chicago Fire", clubCountry: "USA", birthCity: "Naperville", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Left", otherPositions: [], showDualFlagsOnCard: false },
  { id: "kochen", fullName: "Diego Kochen", displayName: "Kochen", position: "GK", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/938144-1727891789.jpg?lm=1", age: 19, club: "Barcelona", clubCountry: "Spain", birthCity: "Miami", birthCountry: "USA", eligibleCountries: ["USA", "Spain", "Peru"], dominantFoot: "Right", otherPositions: [], showDualFlagsOnCard: true },
  { id: "klinsmann", fullName: "Jonathan Klinsmann", displayName: "Klinsmann", position: "GK", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/334992-1678024209.jpg?lm=1", age: 28, club: "Cesena", clubCountry: "Italy", birthCity: "Munich", birthCountry: "Germany", eligibleCountries: ["USA", "Germany"], dominantFoot: "Right", otherPositions: [], showDualFlagsOnCard: true },
  { id: "slonina", fullName: "Gabriel Slonina", displayName: "Slonina", position: "GK", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/656316-1645958054.jpg?lm=1", age: 21, club: "Chelsea", clubCountry: "England", birthCity: "Addison", birthCountry: "USA", eligibleCountries: ["USA", "Poland"], dominantFoot: "Right", otherPositions: [], showDualFlagsOnCard: false },
  { id: "pepi", fullName: "Ricardo Pepi", displayName: "Pepi", position: "ST", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/627207-1745174088.jpg?lm=1", age: 23, club: "PSV", clubCountry: "Netherlands", birthCity: "El Paso", birthCountry: "USA", eligibleCountries: ["USA", "Mexico"], dominantFoot: "Right", otherPositions: [], showDualFlagsOnCard: false },
  { id: "haji-wright", fullName: "Haji Wright", displayName: "H. Wright", position: "ST", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/315291-1709161726.jpg?lm=1", age: 27, club: "Coventry City", clubCountry: "England", birthCity: "Los Angeles", birthCountry: "USA", eligibleCountries: ["USA", "Liberia"], dominantFoot: "Right", otherPositions: ["LW"], showDualFlagsOnCard: false },
  { id: "agyemang", fullName: "Patrick Agyemang", displayName: "Agyemang", position: "ST", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/1089574-1740509246.jpg?lm=1", age: 24, club: "Derby County", clubCountry: "USA", birthCity: "East Hartford", birthCountry: "USA", eligibleCountries: ["USA", "Ghana"], dominantFoot: "Right", otherPositions: ["CF"], showDualFlagsOnCard: false },
  { id: "mcglynn", fullName: "Jack McGlynn", displayName: "McGlynn", position: "CM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/724547-1771689209.jpg?lm=1", age: 22, club: "Houston Dynamo", clubCountry: "USA", birthCity: "Middletown", birthCountry: "USA", eligibleCountries: ["USA", "Ireland"], dominantFoot: "Left", otherPositions: ["CAM"], showDualFlagsOnCard: false },
  { id: "morris", fullName: "Aidan Morris", displayName: "A. Morris", position: "CDM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/513968-1709481996.jpg?lm=1", age: 24, club: "Middlesbrough", clubCountry: "England", birthCity: "Fort Lauderdale", birthCountry: "USA", eligibleCountries: ["USA", "Canada"], dominantFoot: "Right", otherPositions: ["CM"], showDualFlagsOnCard: false },
  { id: "sands", fullName: "James Sands", displayName: "Sands", position: "CDM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/393321-1755032856.jpg?lm=1", age: 25, club: "St. Pauli", clubCountry: "Germany", birthCity: "Rye", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Right", otherPositions: ["CB"], showDualFlagsOnCard: false },
  { id: "luna", fullName: "Diego Luna", displayName: "Luna", position: "CAM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/880626-1771718507.jpg?lm=1", age: 21, club: "Real Salt Lake", clubCountry: "USA", birthCity: "Sunnyvale", birthCountry: "USA", eligibleCountries: ["USA", "Mexico"], dominantFoot: "Right", otherPositions: ["LW", "RW"], showDualFlagsOnCard: false },
  { id: "reyna", fullName: "Giovanni Reyna", displayName: "Reyna", position: "CAM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/504215-1760967520.jpg?lm=1", age: 24, club: "Borussia Mönchengladbach", clubCountry: "Germany", birthCity: "Sunderland", birthCountry: "England", eligibleCountries: ["USA", "England", "Argentina", "Portugal"], dominantFoot: "Right", otherPositions: ["RW", "CM"], showDualFlagsOnCard: false },
  { id: "brenden-aaronson", fullName: "Brenden Aaronson", displayName: "B. Aaronson", position: "CAM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/393323-1691614083.jpg?lm=1", age: 24, club: "Leeds United", clubCountry: "England", birthCity: "Medford", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Right", otherPositions: ["CM", "RW"], showDualFlagsOnCard: false },
  { id: "paxten-aaronson", fullName: "Paxten Aaronson", displayName: "P. Aaronson", position: "CAM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/795738-1771612805.jpg?lm=1", age: 21, club: "Colorado Rapids", clubCountry: "USA", birthCity: "Medford", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Right", otherPositions: ["CM"], showDualFlagsOnCard: false },
  { id: "liam-west", fullName: "Liam West", displayName: "West", position: "RW", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/1068117-1771592380.jpg?lm=1", age: 18, club: "FC Copenhagen", clubCountry: "Norway", birthCity: "Oslo", birthCountry: "Norway", eligibleCountries: ["USA", "Norway"], dominantFoot: "Right", otherPositions: ["LW"], showDualFlagsOnCard: true },
  { id: "culbreath", fullName: "Montrell Culbreath", displayName: "Culbreath", position: "RW", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/1058514-1756412896.jpg?lm=1", age: 19, club: "Bayer Leverkusen", clubCountry: "Germany", birthCity: "Munich", birthCountry: "Germany", eligibleCountries: ["USA", "Germany"], dominantFoot: "Right", otherPositions: ["CAM"], showDualFlagsOnCard: true },
  { id: "tillman", fullName: "Malik Tillman", displayName: "Tillman", position: "CAM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/467437-1758703514.jpg?lm=1", age: 23, club: "Bayer Leverkusen", clubCountry: "Germany", birthCity: "Nürnberg", birthCountry: "Germany", eligibleCountries: ["USA", "Germany"], dominantFoot: "Right", otherPositions: ["CM", "RW"], showDualFlagsOnCard: false },
  { id: "freeman", fullName: "Alex Freeman", displayName: "Freeman", position: "RB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/985806-1740780278.jpg?lm=1", age: 21, club: "Villarreal", clubCountry: "Spain", birthCity: "Baltimore", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Right", otherPositions: ["RCB"], showDualFlagsOnCard: false },
  { id: "mckenzie", fullName: "Mark McKenzie", displayName: "McKenzie", position: "CB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/429259-1714036622.png?lm=1", age: 26, club: "Toulouse", clubCountry: "France", birthCity: "Bear", birthCountry: "USA", eligibleCountries: ["USA", "Jamaica"], dominantFoot: "Right", otherPositions: [], showDualFlagsOnCard: false },
  { id: "banks", fullName: "Noahkai Banks", displayName: "Banks", position: "CB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/923945-1755200998.jpg?lm=1", age: 18, club: "FC Augsburg", clubCountry: "Germany", birthCity: "Honolulu", birthCountry: "USA", eligibleCountries: ["USA", "Germany"], dominantFoot: "Right", otherPositions: ["CDM"], showDualFlagsOnCard: false },
  { id: "zendejas", fullName: "Alejandro Zendejas", displayName: "Zendejas", position: "RW", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/351505-1735980931.jpg?lm=1", age: 27, club: "Club América", clubCountry: "Mexico", birthCity: "Ciudad Juárez", birthCountry: "Mexico", eligibleCountries: ["USA", "Mexico"], dominantFoot: "Left", otherPositions: ["LW", "CAM"], showDualFlagsOnCard: false },
  { id: "trusty", fullName: "Auston Trusty", displayName: "Trusty", position: "CB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/389253-1647191322.jpg?lm=1", age: 26, club: "Celtic", clubCountry: "England", birthCity: "Media", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Left", otherPositions: ["LB"], showDualFlagsOnCard: false },
  { id: "paredes", fullName: "Kevin Paredes", displayName: "Paredes", position: "LW", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/711517-1752736742.jpg?lm=1", age: 22, club: "VfL Wolfsburg", clubCountry: "Germany", birthCity: "South Riding", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Left", otherPositions: ["LM", "LWB"], showDualFlagsOnCard: false },
  { id: "kris-lund", fullName: "Kristoffer Lund", displayName: "K. Lund", position: "LB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/623773-1671206846.jpg?lm=1", age: 23, club: "Palermo", clubCountry: "Italy", birthCity: "Kerteminde", birthCountry: "Denmark", eligibleCountries: ["USA", "Denmark"], dominantFoot: "Left", otherPositions: ["RB"], showDualFlagsOnCard: false },
  { id: "downs", fullName: "Damion Downs", displayName: "Downs", position: "ST", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/820241-1721139459.jpg?lm=1", age: 21, club: "Hamburg (loan)", clubCountry: "Germany", birthCity: "Werne", birthCountry: "Germany", eligibleCountries: ["USA", "Germany"], dominantFoot: "Right", otherPositions: ["LW"], showDualFlagsOnCard: false },
  { id: "luca-koleosho", fullName: "Luca Koleosho", displayName: "Koleosho", position: "RW", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/745461-1759159569.jpg?lm=1", age: 21, club: "Paris FC (loan)", clubCountry: "France", birthCity: "Norwalk, Connecticut", birthCountry: "USA", eligibleCountries: ["USA", "Italy", "Nigeria"], dominantFoot: "Right", otherPositions: ["LW", "CAM"], showDualFlagsOnCard: true },
  { id: "arfsten", fullName: "Max Arfsten", displayName: "Arfsten", position: "LW", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/993063-1771598732.jpg?lm=1", age: 24, club: "Columbus Crew", clubCountry: "USA", birthCity: "Fresno", birthCountry: "USA", eligibleCountries: ["USA", "Armenia"], dominantFoot: "Left", otherPositions: ["LM", "LWB"], showDualFlagsOnCard: false },
  { id: "berhalter", fullName: "Sebastian Berhalter", displayName: "Berhalter", position: "CM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/734761-1771861285.jpg?lm=1", age: 24, club: "Vancouver Whitecaps", clubCountry: "Canada", birthCity: "Columbus", birthCountry: "USA", eligibleCountries: ["USA", "England", "Ireland"], dominantFoot: "Right", otherPositions: ["CDM"], showDualFlagsOnCard: false },
  { id: "roldan", fullName: "Cristian Roldán", displayName: "Roldán", position: "CM", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/354792-1771757451.jpg?lm=1", age: 30, club: "Seattle Sounders", clubCountry: "USA", birthCity: "Pico Rivera", birthCountry: "USA", eligibleCountries: ["USA", "El Salvador"], dominantFoot: "Right", otherPositions: ["RM"], showDualFlagsOnCard: false },
  { id: "campbell", fullName: "George Campbell" , displayName: "Campbell", position: "CB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/585769-1740596927.jpg?lm=1", age: 24, club: "West Bromwich Albian", clubCountry: "England", birthcity: "Chester" , birthCountry: "USA" , eligibleCountries: ["USA"], dominantFoot: "Right", otherPositions: [], showDualFlagsOnCard: false },
  { id: "miles-robinson", fullName: "Miles Robinson", displayName: "M. Robinson", position: "CB", explicitPhoto: "https://img.a.transfermarkt.technology/portrait/header/468022-1771597844.jpg?lm=1", age: 28, club: "FC Cincinnati", clubCountry: "USA", birthCity: "Arlington", birthCountry: "USA", eligibleCountries: ["USA"], dominantFoot: "Right", otherPositions: [], showDualFlagsOnCard: false },
];

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

const flagMeta = {
  USA: { png: "184", fallback: "usa" }, Nigeria: { png: "124", fallback: "nigeria" }, Jamaica: { png: "76", fallback: "jamaica" }, Mexico: { png: "110", fallback: "mexico" }, Germany: { png: "40", fallback: "germany" }, Portugal: { png: "136", fallback: "portugal" }, Argentina: { png: "9", fallback: "argentina" }, Italy: { png: "75", fallback: "italy" }, Canada: { png: "80", fallback: "canada" }, Spain: { png: "157", fallback: "spain" }, Ghana: { png: "54", fallback: "ghana" }, England: { png: "189", fallback: "england" }, France: { png: "50", fallback: "france" }, Norway: { png: "125", fallback: "norway" }, Denmark: { png: "39", fallback: "denmark" },
  Croatia: { fallback: "croatia" }, Liberia: { fallback: "liberia" }, Japan: { fallback: "japan" }, Netherlands: { fallback: "netherlands" }, Suriname: { fallback: "suriname" }, Lithuania: { fallback: "lithuania" }, Peru: { fallback: "peru" }, Poland: { fallback: "poland" }, Brazil: { fallback: "brazil" }, Ireland: { fallback: "ireland" }, Armenia: { fallback: "armenia" }, "El Salvador": { fallback: "elsalvador" },
};

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

const lineup = new Map();
let activeSearchSlot = null;
let shareBlob = null;

const getPhotoFallback = () => "./playerface.jpg";
const proxyPhoto = (url) => `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ""))}`;
const getPrimaryPhoto = (p) => p.explicitPhoto;
const getRosterName = () => rosterNameInput.value.trim() || "My USMNT Squad";
const getRosterFileName = () => `${getRosterName().replace(/[^a-z0-9-_]+/gi, "-").toLowerCase() || "usmnt-roster"}.png`;

const bindPlayerImage = (imgEl, url) => {
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
        <li><strong>Age:</strong> ${player.age}</li>
        <li><strong>Club:</strong> ${player.club} <span id="club-flag-wrap"></span></li>
        <li><strong>Place of birth:</strong> ${player.birthCity} <span id="birth-flag-wrap"></span></li>
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

const captureBoardBlob = async () => {
  if (!window.html2canvas) throw new Error("Capture utility unavailable");
  shareModal.classList.add("is-busy");

  const isMobile = window.matchMedia("(max-width: 1100px)").matches;
  let target = squadBoardEl;
  let cleanup = null;

  if (isMobile) {
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
    target = clone;
    cleanup = () => holder.remove();
  }

  const renderCanvas = async (node) => {
    await waitForImages(node);
    return await Promise.race([
      window.html2canvas(node, { backgroundColor: "#4b210c", useCORS: true, scale: 2 }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Capture timed out")), 12000)),
    ]);
  };

  let boardCanvas;
  try {
    boardCanvas = await renderCanvas(target);
  } catch (err) {
    const fallbackBoard = buildInitialsFallbackClone(target);
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

  cleanup?.();

  const out = document.createElement("canvas");
  out.width = 1080;
  out.height = 1440;
  const ctx = out.getContext("2d");
  ctx.fillStyle = "#4b210c";
  ctx.fillRect(0, 0, out.width, out.height);

  const margin = 50;
  const drawWidth = out.width - margin * 2;
  const ratio = boardCanvas.height / boardCanvas.width;
  const drawHeight = Math.min(out.height - 220, drawWidth * ratio);
  const dy = 90;
  ctx.drawImage(boardCanvas, margin, dy, drawWidth, drawHeight);

  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.font = "700 42px Manrope, sans-serif";
  ctx.fillText(getRosterName(), margin, 56);

  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.font = "600 34px Manrope, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Joshua Reports", out.width / 2, dy + drawHeight - 16);

  return await new Promise((resolve) => out.toBlob(resolve, "image/png", 1));
};

const openShareModal = async () => {
  shareModal.showModal();
  shareStatus.textContent = "Generating image...";
  shareBlob = null;
  try {
    shareBlob = await captureBoardBlob();
    if (!shareBlob) throw new Error("Could not create image");
    shareStatus.textContent = "Image ready. Choose Save, Email, Text, or X.";
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
