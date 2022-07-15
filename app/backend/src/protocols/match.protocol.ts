export interface IMatch {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
};

export interface IMatchModel {
  findAll(inProgress: boolean | null): Promise<IMatch[] | null>;
};

export interface IMatchService {
  findAll(inProgress: boolean | null): Promise<IMatch[] | null>;
};

