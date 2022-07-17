import { Router } from 'express';
import validateJWT from '../middleware/validateJWT';
import { MatchFactory } from '../factory/match.factory';
import validateMatch from '../middleware/validateMatch';

const matchRouter = Router();

matchRouter.get('/matches', (req, res, next) => {
  MatchFactory().findAll(req, res, next);
});

matchRouter.post('/matches', validateJWT, validateMatch, (req, res, next) => {
  MatchFactory().createMatch(req, res, next);
});

matchRouter.patch('/matches/:id/finish', validateMatch, (req, res, next) => {
  MatchFactory().updatePatch(req, res, next);
});

export default matchRouter;