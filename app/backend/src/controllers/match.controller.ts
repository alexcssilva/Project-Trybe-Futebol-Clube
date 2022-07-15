import { Request, Response, NextFunction } from 'express';
import { IMatchService } from '../protocols/match.protocol';

class MatchController {
  constructor(private service: IMatchService) {
    this.service = service;
  };

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { inProgress } = req.query;
      let teamProgress = null;
      if (inProgress === 'false') {
        return teamProgress = false;
      } else {
        teamProgress = true;
      }
      const matches = await this.service.findAll(teamProgress);
      return res.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  };
};

export default MatchController;