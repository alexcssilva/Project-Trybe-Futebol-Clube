export interface ITeam {
  id?: number;
  teamName: string;
};

export interface ITeamModel {
  findAll(): Promise<ITeam[] | null>;
  findTeam(id: string): Promise<ITeam | null>;
};

export interface ITeamService {
  findAll(): Promise<ITeam[] | null>;
  findTeam(id: string): Promise<ITeam | null>;
};

