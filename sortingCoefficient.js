// League ranking system - MOST IMPORTANT (50% weight)
const LEAGUE_RANKINGS = {
  // Tier 1: Top 5 European Leagues (in order of prestige)
  "Premier League": 5.0,
  "La Liga": 4.8,
  "Serie A": 4.6,
  "Ligue 1": 4.4,
  "Bundesliga": 4.2,
  
  // Tier 2: Brazilian & Argentine Leagues (equal to strong European)
  "Série A": 4.0,      // Brazilian top division
  "Serie A TIM": 4.0,  // Sometimes used for Italian, but also Brazilian
  "Brazilian Serie A": 4.0,
  "Argentine Primera": 4.0,
  "Primeira División": 4.0,
  
  // Tier 3: Other Strong European Leagues
  "Eredivisie": 3.8,
  "Primeira Liga": 3.7,
  "Süper Lig": 3.6,
  "Liga NOS": 3.6,
  "Ligue 2": 3.5,
  "2. Bundesliga": 3.4,
  "Championship": 3.3,
  "Serie B": 3.2,
  "La Liga 2": 3.1,
  
  // Tier 4: Secondary European & Other Leagues
  "Eredivisie Vrouwen": 2.9,
  "Belgian First Division": 2.7,
  "Greek Super League": 2.6,
  "Czech First League": 2.5,
  "Polish Ekstraklasa": 2.4,
  "Swiss Super League": 2.4,
  "Austrian Bundesliga": 2.3,
  "Scottish Premier League": 2.2,
  "Danish Superliga": 2.1,
  "Swedish Allsvenskan": 2.0,
  "Norwegian Eliteserien": 2.0,
  
  // Tier 5: MLS & Liga MX (EQUAL LEVEL)
  "MLS": 1.5,
  "Liga MX": 1.5,
  
  // Tier 6: Rest of World & Unknowns
  "default": 1.0,
};

// Position ranking system - LEAST IMPORTANT (15% weight)
const POSITION_RANKINGS = {
  // Attacking (Forwards)
  "ST": { value: 1.0 },      // Striker
  "CF": { value: 1.0 },      // Center Forward
  "RW": { value: 0.98 },     // Right Winger
  "LW": { value: 0.98 },     // Left Winger
  "RM": { value: 0.96 },     // Right Midfielder (attacking)
  "LM": { value: 0.96 },     // Left Midfielder (attacking)
  
  // Attacking Midfield
  "CAM": { value: 0.90 },    // Center Attacking Midfielder
  "RAM": { value: 0.88 },    // Right Attacking Midfielder
  "LAM": { value: 0.88 },    // Left Attacking Midfielder
  
  // Central Midfielders
  "CM": { value: 0.80 },     // Central Midfielder
  "RCM": { value: 0.78 },    // Right Central Midfielder
  "LCM": { value: 0.78 },    // Left Central Midfielder
  
  // Defensive Midfielders
  "CDM": { value: 0.70 },    // Central Defensive Midfielder
  "DM": { value: 0.70 },     // Defensive Midfielder
  
  // Defenders
  "CB": { value: 0.60 },     // Center Back
  "RB": { value: 0.58 },     // Right Back
  "LB": { value: 0.58 },     // Left Back
  "RWB": { value: 0.62 },    // Right Wing Back
  "LWB": { value: 0.62 },    // Left Wing Back
  
  // Goalkeeper
  "GK": { value: 0.40 },     // Goalkeeper
};

/**
 * Age coefficient - SECOND MOST IMPORTANT (35% weight)
 * 
 * Logic:
 * - Teenagers (15-19): Higher score the YOUNGER you are (more impressive to get minutes)
 *   - Age 15: 1.0 (peak)
 *   - Age 19: 0.7
 * - Young Players (20-23): Drops to floor, just another young player
 *   - Age 20-23: 0.4-0.5
 * - Prime (24+): Peaks at 1.0 and holds
 */
function getAgeCoefficient(age, position) {
  if (age < 15) {
    return 0.3; // Too young
  }
  
  if (age >= 15 && age <= 19) {
    // TEENAGERS: Younger = Higher score (more impressive to get minutes)
    // Age 15 = 1.0, Age 19 = 0.7
    return 1.0 - (age - 15) * 0.075; // Decline by 0.075 per year
  }
  
  if (age >= 20 && age <= 23) {
    // YOUNG PLAYERS: Just another young player, lower priority
    // Range from 0.5 down to 0.4, then back up
    if (age === 20) return 0.5;
    if (age === 21) return 0.45;
    if (age === 22) return 0.42;
    if (age === 23) return 0.45; // Slight uptick before prime
    return 0.45;
  }
  
  if (age >= 24) {
    // PRIME: 24 and up is prime years, holds at 1.0
    return 1.0;
  }
  
  return 0.3;
}

/**
 * Get league coefficient by parsing club info
 */
function getLeagueCoefficient(club) {
  if (!club) return LEAGUE_RANKINGS.default; // Free agent
  
  // Try exact league name match first
  for (const [league, value] of Object.entries(LEAGUE_RANKINGS)) {
    if (league !== "default" && club.includes(league)) {
      return value;
    }
  }
  
  // Try extracting league from parentheses
  const leagueMatch = club.match(/\(([^)]+)\)/);
  if (leagueMatch) {
    const extracted = leagueMatch[1];
    if (LEAGUE_RANKINGS[extracted]) {
      return LEAGUE_RANKINGS[extracted];
    }
  }
  
  // Default for unrecognized
  return LEAGUE_RANKINGS.default;
}

/**
 * Main sorting coefficient function
 * Weights: League (50%) > Age (35%) > Position (15%)
 */
function calculateSortingCoefficient(player) {
  const {
    position = "GK",
    age = 18,
    club = null,
  } = player;
  
  // Get individual coefficients
  const positionCoef = (POSITION_RANKINGS[position] || POSITION_RANKINGS.GK).value;
  const ageCoef = getAgeCoefficient(age, position);
  const leagueCoef = getLeagueCoefficient(club);
  
  // Weighted formula: League (50%) > Age (35%) > Position (15%)
  const coefficient =
    (leagueCoef / 5) * 0.50 +      // Normalize league (max 5) to 0-1 range
    ageCoef * 0.35 +               // Age has direct 0-1 range
    positionCoef * 0.15;           // Position has lowest weight
  
  return coefficient;
}

/**
 * Sort players by coefficient (descending)
 */
function sortPlayersByCoefficient(players) {
  return [...players].sort((a, b) => {
    const coeffA = calculateSortingCoefficient(a);
    const coeffB = calculateSortingCoefficient(b);
    return coeffB - coeffA;
  });
}

// Export for use
window.PlayerSorting = {
  calculateSortingCoefficient,
  sortPlayersByCoefficient,
  getAgeCoefficient,
  getLeagueCoefficient,
  LEAGUE_RANKINGS,
  POSITION_RANKINGS,
};
