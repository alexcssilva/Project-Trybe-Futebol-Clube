import { Router } from 'express';
import validateJWT from '../middleware/validateJWT';
import { MatchFactory } from '../factory/match.factory';

const matchRouter = Router();

matchRouter.get('/matches', (req, res, next) => {
  MatchFactory().findAll(req, res, next);
});

matchRouter.post('/matches', validateJWT, (req, res, next) => {
  MatchFactory().createMatch(req, res, next);
});

matchRouter.patch('/matches/:id/finish', (req, res, next) => {
  MatchFactory().updatePatch(req, res, next);
});

export default matchRouter;