import { IMatchService, IMatchModel, IMatch } from './../protocols/match.protocol';

class Match implements IMatchService {
  constructor(private model: IMatchModel) {
    this.model = model;
  }

  async findAll(inProgress: boolean | null): Promise<IMatch[] | null> {
    const matches = await this.model.findAll(inProgress);

    return matches;
  }

  async updateMatch(match: IMatch): Promise<IMatch> {
    const matches = await this.model.createMatch(match);

    return matches;
  }

  async updatePatch(id: string): Promise<unknown> {
    const match = await this.model.updatePatch(id);

    return match;
  }

  async scoreUpdate(homeTeamGoals: number, awayTeamGoals: number, id: string): Promise<unknown> {
    const match = await this.model.scoreUpdate(homeTeamGoals, awayTeamGoals, id);

    return match;
  }
}

export default Match;
