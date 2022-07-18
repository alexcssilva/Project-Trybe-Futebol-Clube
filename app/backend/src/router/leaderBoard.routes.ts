import { Router } from 'express';
import { LeaderBoardFactory } from '../factory/leaderBoard.factory'

const leaderBoardRouter = Router();

leaderBoardRouter.get('/leaderboard/home', (req, res, next) => {
  LeaderBoardFactory().findAllBoard(req, res, next);
});

export default leaderBoardRouter;