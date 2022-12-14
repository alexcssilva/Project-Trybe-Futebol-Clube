import { ITeamService, ITeamModel, ITeam } from './../protocols/team.protocol';

class Team implements ITeamService {
  constructor(private model: ITeamModel) {
    this.model = model;
  };

  async findAll(): Promise<ITeam[] | null> {
    const teams = await this.model.findAll();

    return teams;
  }

  async findTeam(id: string): Promise<ITeam | null> {
    const team = await this.model.findTeam(id);

    return team;
  }
};

export default Team;