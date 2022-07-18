import { IMatch } from '../protocols/match.protocol';


function resultMatch(matches: IMatch[]) {
  const totalMatches = { totalVictories: 0, totalDraws: 0, totalLosses: 0 };

  matches.forEach((match) => {

    if (match.homeTeamGoals - match.awayTeamGoals > 0) {
      
      return totalMatches.totalVictories += 1;
    }
    else if (match.homeTeamGoals - match.awayTeamGoals < 0) {
      
      return totalMatches.totalLosses += 1;
    }
    else {

      return totalMatches.totalDraws += 1;
    }}
  );
  return totalMatches;
}

export default resultMatch;