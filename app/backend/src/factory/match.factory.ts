import MatchRepository from '../repository/match.repository';
import MatchService from '../services/matches.service';
import MatchController from '../controllers/match.controller';

export const MatchFactory = () => {
  const repository = new MatchRepository();
  const service = new MatchService(repository);
  const controller = new MatchController(service);

  return controller;
};