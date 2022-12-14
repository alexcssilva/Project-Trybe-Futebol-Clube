import Model from '../database/models/match.model';
import { IMatch, IMatchModel } from '../protocols/match.protocol';
import teamModel from '../database/models/team.model';

class MatchRepository implements IMatchModel {
  constructor(private model = Model) {
    this.model = model;
  }

  findAll = async (inProgress: boolean | null): Promise<IMatch[] | null> => {

    let matches = undefined;

    if (inProgress === null) {
      matches = await this.model.findAll({ include: [
        { model: teamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: teamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
       ] });
    } else {
      matches = await this.model.findAll({ where: { inProgress }, include: [
        { model: teamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: teamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
      ] });
    }
    return matches as IMatch[];
  };

  createMatch = async (match: IMatch): Promise<IMatch> => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;

    const matches = await this.model.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    return matches;
  };

  updatePatch = async (id: string): Promise<unknown> => {
    const match = await this.model.update({ inProgress: false }, { where: { id } });

    return match;
  };

  scoreUpdate = async (
    homeTeamGoals: number,
    awayTeamGoals: number,
    id: string): Promise<unknown> => {
    const updateMatch = await this.model.update({
      homeTeamGoals,
      awayTeamGoals,
      id }, { where: { id } });

    return updateMatch;
  };
}

export default MatchRepository;
