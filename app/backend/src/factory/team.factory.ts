import TeamRepository from '../repository/team.repository';
import TeamService from '../services/teams.service';
import TeamController from '../controllers/team.controller';

export const TeamFactory = () => {
  const repository = new TeamRepository();
  const service = new TeamService(repository);
  const controller = new TeamController(service);

  return controller;
};