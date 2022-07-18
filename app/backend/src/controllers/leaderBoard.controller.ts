import { Request, Response, NextFunction } from 'express';
import { ILeaderBoardService } from '../protocols/leaderBoard.protocol';


class LeaderBoardService {
  constructor(private service: ILeaderBoardService) {
    this.service = service;
  };

  async findAllBoard(_req: Request, res: Response, next: NextFunction) {
    try {
      const match = await this.service.findHome();

      return res.status(200).json(match);
    } catch (error) {
      next(error);
    }
  };
};

export default LeaderBoardService;