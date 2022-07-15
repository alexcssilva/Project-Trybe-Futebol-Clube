import Model from '../database/models/team.model';
import { ITeam, ITeamModel } from '../protocols/team.protocol';

class TeamRepository implements ITeamModel{
  constructor(private model = Model){
    this.model = model;
  };

  findAll = async (): Promise<ITeam[] | null> => {
    const teams = await this.model.findAll();

    return teams;
  }
};

export default TeamRepository;