import { IMatch } from './../protocols/match.protocol';
import { ITeam } from './../protocols/team.protocol';
import goalsHome from './goalsHome.utils';
import resultMatch from './resultMatch.utils';
import totalGoals from './totalGoals.utils';


function boardHome(team: ITeam, matches: IMatch[]) {
  const { goalsFavor, goalsOwn, goalsBalance } = goalsHome(matches);
  const { totalVictories, totalDraws, totalLosses } = resultMatch(matches);
  const { totalGames, totalPoints, efficiency } = totalGoals(
    totalVictories,
    totalDraws,
    totalLosses
  );
  const name = team.teamName;

  return {
    name,
    totalPoints,
    totalGames,
    totalVictories,
    totalDraws,
    totalLosses,
    goalsFavor,
    goalsOwn,
    goalsBalance,
    efficiency,
  };
}

export default boardHome;