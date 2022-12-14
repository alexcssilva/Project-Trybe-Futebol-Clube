export interface IMatch {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IMatchModel {
  findAll(inProgress: boolean | null): Promise<IMatch[] | null>;
  createMatch(match: IMatch): Promise<IMatch>;
  updatePatch(id: string): Promise<unknown>;
  scoreUpdate(homeTeamGoals: number, awayTeamGoals: number, id: string): Promise<unknown>;
}

export interface IMatchService {
  findAll(inProgress: boolean | null): Promise<IMatch[] | null>;
  updateMatch(match: IMatch): Promise<IMatch>;
  updatePatch(id: string): Promise<unknown>;
  scoreUpdate(homeTeamGoals: number, awayTeamGoals: number, id: string): Promise<unknown>;
}
