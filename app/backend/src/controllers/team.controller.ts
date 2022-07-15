import { Request, Response, NextFunction } from 'express';
import { ITeamService } from '../protocols/team.protocol';

class TeamController {
  constructor(private service: ITeamService) {
    this.service = service;
  };

  async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this.service.findAll();
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  };
};

export default TeamController;