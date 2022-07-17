import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Match from '../database/models/match.model';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test match', () => {
   before(async () => {
    sinon
      .stub(Match, 'findOne')
      .resolves([{
        id: 41,
        homeTeam: 16,
        homeTeamGoals: 2,
        awayTeam: 9,
        awayTeamGoals: 0,
        inProgress: true,
        teamHome: {
          teamName: 'São Paulo',
        },
        teamAway: {
          teamName: 'Internacional',
        }
      }] as unknown as Match);
  });

  after(()=>{
    (Match.findOne as sinon.SinonStub).restore();
  })

  const match = {
    id: 41,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 9,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: 'São Paulo',
    },
    teamAway: {
      teamName: 'Internacional'
    }
  }

  it('se é possivel buscar por um placar', async () => {
    const response = await chai.request(app).get('/matches').send(match);

    expect(response.status).to.be.equal(200);
  });
});

describe('Test match placares', () => {
   before(async () => {
    sinon
      .stub(Match, 'findAll')
      .resolves([{
        id: 41,
        homeTeam: 16,
        homeTeamGoals: 2,
        awayTeam: 9,
        awayTeamGoals: 0,
        inProgress: true,
        teamHome: {
          teamName: 'São Paulo',
        },
        teamAway: {
          teamName: 'Internacional',
        }
      }] as unknown as Match[]);
  });

  after(()=>{
    (Match.findAll as sinon.SinonStub).restore();
  })

  const matches = [{
    id: 41,
    homeTeam: 16,
    homeTeamGoals: 2,
    awayTeam: 9,
    awayTeamGoals: 0,
    inProgress: true,
    teamHome: {
      teamName: 'São Paulo',
    },
    teamAway: {
      teamName: 'Internacional'
    }
  }]

  it('se o corpo de times é um array de objetos', async () => {
    const response = await chai.request(app).get('/matches');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.a('array')
  });
});
