import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Match from '../database/models/match.model';
import Team from '../database/models/team.model';

chai.use(chaiHttp);

const { expect } = chai;

const leaderBoard = [
  {
      name: 'Corinthians',
      totalPoints: 6,
      totalGames: 2,
      totalVictories: 2,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 6,
      goalsOwn: 1,
      goalsBalance: 5,
      efficiency: 100
  },
	{
		name: 'Grêmio',
		totalPoints: 6,
		totalGames: 2,
		totalVictories: 2,
		totalDraws: 0,
		totalLosses: 0,
		goalsFavor: 4,
		goalsOwn: 1,
		goalsBalance: 3,
		efficiency: 100
	}
];

const matches = [
  {
		id: 3,
		homeTeam: 4,
		homeTeamGoals: 3,
		awayTeam: 11,
		awayTeamGoals: 0,
		inProgress: false,
		teamHome: {
			teamName: 'Corinthians'
		},
		teamAway: {
			teamName: 'Napoli-SC'
		}
	},
	{
		id: 4,
		homeTeam: 3,
		homeTeamGoals: 0,
		awayTeam: 2,
		awayTeamGoals: 0,
		inProgress: false,
		teamHome: {
			teamName: 'Botafogo'
		},
		teamAway: {
			teamName: 'Bahia'
		}
	},
];

const teams = [
  {
		id: 4,
		teamName: 'Corinthians'
	},
	{
		id: 5,
		teamName: 'Cruzeiro'
	},
	{
		id: 6,
		teamName: 'Ferroviária'
	},
	{
		id: 7,
		teamName: 'Flamengo'
	},
];

describe('Test leader board', () => {
   before(async () => {
    sinon
      .stub(Match, 'findAll')
      .resolves(matches as unknown as Match[]);
    sinon
      .stub(Team, 'findAll')
      .resolves(teams as Team[]);
  });

  after(()=> {
    (Match.findAll as sinon.SinonStub).restore();
    (Team.findAll as sinon.SinonStub).restore();
  })

  it('se é possivel buscar os melhores times', async () => {
    const response = await chai.request(app).get('/leaderboard/home');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.eql(leaderBoard);
  });
});
