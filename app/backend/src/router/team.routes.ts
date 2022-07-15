import { Router } from 'express';
import { TeamFactory } from '../factory/team.factory'

const teamRouter = Router();

teamRouter.get('/teams', (req, res, next) => {
  TeamFactory().findAll(req, res, next);
});

teamRouter.get('/teams/:id', (req, res, next) => {
  TeamFactory().findTeam(req, res, next);
});

export default teamRouter;