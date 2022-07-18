import LeaderBoardService from '../services/leaderBoards.service';
import LeaderBoardController from '../controllers/leaderBoard.controller';
import TeamRepository from '../repository/team.repository';
import MatchRepository from '../repository/match.repository';

export const LeaderBoardFactory = () => {
  const matchRepository = new MatchRepository();
  const teamRepository = new TeamRepository();
  const service = new LeaderBoardService(matchRepository, teamRepository);
  const controller = new LeaderBoardController(service);

  return controller;
};