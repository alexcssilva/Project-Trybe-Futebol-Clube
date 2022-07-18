import { ITeamModel } from './../protocols/team.protocol';
import { IMatchModel } from './../protocols/match.protocol';
import { ILeaderBoard, ILeaderBoardService } from './../protocols/leaderBoard.protocol';
import boardHome from '../utils/boardHome.utils';
import boardOrder from '../utils/boardOrder.utils';


class LeaderBoardService implements ILeaderBoardService {
  constructor(private matchModel: IMatchModel, private teamModel: ITeamModel) {
    this.matchModel = matchModel;
    this.teamModel = teamModel;
  }

  async findHome(): Promise<ILeaderBoard[] | boolean> {
    const matches = await this.matchModel.findAll(false);
    const teams = await this.teamModel.findAll();

    if (!matches || !teams) {

      return false;
    }
    const board = teams.map((team) => {
      const leaderMatches = matches.filter((matc) => matc.homeTeam === team.id);
      const board = boardHome(team, leaderMatches);
      return board;
    });
    const boards = boardOrder(board);

    return boards;
  }
};

export default LeaderBoardService;