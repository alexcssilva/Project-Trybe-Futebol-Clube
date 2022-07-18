import { IMatch } from '../protocols/match.protocol';


function goalsHome(matches: IMatch[]) {
  const totalGoals = { goalsFavor: 0, goalsOwn: 0, goalsBalance: 0};

  matches.forEach((match) => {
    totalGoals.goalsFavor += match.homeTeamGoals;
    totalGoals.goalsOwn += match.awayTeamGoals;
  });

  totalGoals.goalsBalance = totalGoals.goalsFavor - totalGoals.goalsOwn;

  return totalGoals;
}

export default goalsHome;
