import { IMatchService, IMatchModel, IMatch } from './../protocols/match.protocol';

class Match implements IMatchService {
  constructor(private model: IMatchModel) {
    this.model = model;
  };

  async findAll(inProgress: boolean | null): Promise<IMatch[] | null> {
    const matches = await this.model.findAll(inProgress);

    return matches;
  }
};

export default Match;