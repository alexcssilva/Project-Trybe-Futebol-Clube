import { Request, Response, NextFunction } from 'express';
import { IMatchService } from '../protocols/match.protocol';

class MatchController {
  constructor(private service: IMatchService) {
    this.service = service;
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { inProgress } = req.query;
      let teamProgress = null;
      if (inProgress === 'false') teamProgress = false;
      if (inProgress === 'true') teamProgress = true;
      const matches = await this.service.findAll(teamProgress);
      return res.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  }

  async createMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const matches = await this.service.updateMatch(req.body);

      return res.status(201).json(matches);
    } catch (error) {
      next(error);
    }
  }

  async updatePatch(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this.service.updatePatch(id);

      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      next(error);
    }
  }

  async scoreUpdate(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { homeTeamGoals, awayTeamGoals } = req.body;
      await this.service.scoreUpdate(homeTeamGoals, awayTeamGoals, id);

      return res.status(200).json({ message: 'Update Success' });
    } catch (error) {
      next(error);
    }
  }
}

export default MatchController;
