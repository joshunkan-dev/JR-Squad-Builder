/**
 * Get detailed breakdown of a player's sorting score
 */
function getPlayerScoringBreakdown(player) {
  const {
    position = "GK",
    age = 18,
    club = null,
    fullName = "Unknown",
  } = player;
  
  const positionData = window.PlayerSorting.POSITION_RANKINGS[position] || 
                       window.PlayerSorting.POSITION_RANKINGS.GK;
  const positionCoef = positionData.value;
  const ageCoef = window.PlayerSorting.getAgeCoefficient(age, position);
  const leagueCoef = window.PlayerSorting.getLeagueCoefficient(club);
  const totalCoef = window.PlayerSorting.calculateSortingCoefficient(player);
  
  return {
    player: fullName,
    position,
    age,
    club: club || "Free Agent",
    scores: {
      league: {
        raw: leagueCoef,
        normalized: leagueCoef / 5,
        weight: 0.50,
        weighted: (leagueCoef / 5) * 0.50,
      },
      age: {
        raw: ageCoef,
        weight: 0.35,
        weighted: ageCoef * 0.35,
      },
      position: {
        raw: positionCoef,
        weight: 0.15,
        weighted: positionCoef * 0.15,
      },
    },
    totalCoefficient: totalCoef.toFixed(4),
  };
}

/**
 * Get ranking tier explanation
 */
function getTierDescription(coefficient) {
  if (coefficient >= 0.45) return "Elite";
  if (coefficient >= 0.35) return "First Team";
  if (coefficient >= 0.25) return "Squad Player";
  if (coefficient >= 0.18) return "Development";
  return "Reserve";
}

/**
 * Print sorted players with detailed breakdown (for debugging)
 */
function printPlayerRankings(players, limit = 20) {
  const sorted = window.PlayerSorting.sortPlayersByCoefficient(players);
  
  console.log("=== TOP PLAYERS BY COEFFICIENT ===\n");
  console.log("Weights: League (50%) > Age (35%) > Position (15%)\n");
  console.log(
    "Rank | Player                 | Pos | Age | Total  | League | Age    | Pos    | Tier"
  );
  console.log("-".repeat(90));
  
  sorted.slice(0, limit).forEach((player, idx) => {
    const breakdown = getPlayerScoringBreakdown(player);
    const scores = breakdown.scores;
    
    console.log(
      `${String(idx + 1).padEnd(4)} | ${breakdown.player.padEnd(20)} | ${breakdown.position.padEnd(3)} | ${String(breakdown.age).padEnd(3)} | ${breakdown.totalCoefficient.padEnd(6)} | ${scores.league.weighted.toFixed(3).padEnd(6)} | ${scores.age.weighted.toFixed(3).padEnd(6)} | ${scores.position.weighted.toFixed(3).padEnd(6)} | ${getTierDescription(parseFloat(breakdown.totalCoefficient))}`
    );
  });
  console.log("-".repeat(90));
}

/**
 * Compare two players side-by-side
 */
function comparePlayerScores(player1, player2) {
  const breakdown1 = getPlayerScoringBreakdown(player1);
  const breakdown2 = getPlayerScoringBreakdown(player2);
  
  console.log("\n=== PLAYER COMPARISON ===\n");
  
  console.log(`Player 1: ${breakdown1.player}`);
  console.log(`  Position: ${breakdown1.position} | Age: ${breakdown1.age} | Club: ${breakdown1.club}`);
  console.log(`  Total Score: ${breakdown1.totalCoefficient} (${getTierDescription(parseFloat(breakdown1.totalCoefficient))})`);
  console.log(
    `  League: ${breakdown1.scores.league.weighted.toFixed(4)} (raw: ${breakdown1.scores.league.raw.toFixed(2)}) | Age: ${breakdown1.scores.age.weighted.toFixed(4)} | Position: ${breakdown1.scores.position.weighted.toFixed(4)}\n`
  );
  
  console.log(`Player 2: ${breakdown2.player}`);
  console.log(`  Position: ${breakdown2.position} | Age: ${breakdown2.age} | Club: ${breakdown2.club}`);
  console.log(`  Total Score: ${breakdown2.totalCoefficient} (${getTierDescription(parseFloat(breakdown2.totalCoefficient))})`);
  console.log(
    `  League: ${breakdown2.scores.league.weighted.toFixed(4)} (raw: ${breakdown2.scores.league.raw.toFixed(2)}) | Age: ${breakdown2.scores.age.weighted.toFixed(4)} | Position: ${breakdown2.scores.position.weighted.toFixed(4)}\n`
  );
  
  const diff = parseFloat(breakdown1.totalCoefficient) - parseFloat(breakdown2.totalCoefficient);
  const winner = diff > 0 ? breakdown1.player : breakdown2.player;
  console.log(`Winner: ${winner} by ${Math.abs(diff).toFixed(4)}`);
}

/**
 * Get players filtered and sorted by single criteria
 */
function getPlayersByCriteria(players, criteria = "coefficient") {
  const sorted = [...players].sort((a, b) => {
    if (criteria === "coefficient") {
      return window.PlayerSorting.calculateSortingCoefficient(b) - 
             window.PlayerSorting.calculateSortingCoefficient(a);
    } else if (criteria === "age") {
      return b.age - a.age;
    } else if (criteria === "league") {
      return window.PlayerSorting.getLeagueCoefficient(b.club) - 
             window.PlayerSorting.getLeagueCoefficient(a.club);
    } else if (criteria === "position") {
      const posB = window.PlayerSorting.POSITION_RANKINGS[b.position]?.value || 0;
      const posA = window.PlayerSorting.POSITION_RANKINGS[a.position]?.value || 0;
      return posB - posA;
    }
  });
  
  return sorted;
}

/**
 * Get age breakdown stats
 */
function getAgeBreakdown(players) {
  const teenagers = players.filter(p => p.age >= 15 && p.age <= 19).length;
  const youngPlayers = players.filter(p => p.age >= 20 && p.age <= 23).length;
  const prime = players.filter(p => p.age >= 24).length;
  
  console.log("\n=== AGE BREAKDOWN ===");
  console.log(`Teenagers (15-19):   ${teenagers} players`);
  console.log(`Young (20-23):       ${youngPlayers} players`);
  console.log(`Prime (24+):         ${prime} players`);
  console.log(`Total:               ${players.length} players\n`);
}

/**
 * Export utilities
 */
window.PlayerSortingUtils = {
  getPlayerScoringBreakdown,
  getTierDescription,
  printPlayerRankings,
  comparePlayerScores,
  getPlayersByCriteria,
  getAgeBreakdown,
};
