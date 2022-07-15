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

  async findTeam(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const team = await this.service.findTeam(id);
      return res.status(200).json(team);
    } catch (error) {
      next(error);
    }
  };
};

export default TeamController;