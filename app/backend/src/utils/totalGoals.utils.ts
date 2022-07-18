function totalGoals(victories: number, draws: number, losses: number) {
  const totalGames = victories + draws + losses;
  const totalPoints = victories * 3 + draws * 1;
  const efficiency = Math.round((totalPoints * 10000) / (totalGames * 3) / 100);

  return { totalGames, totalPoints, efficiency };
}

export default totalGoals;
// Auxiliado por Rafael Jesus - Turma 17
