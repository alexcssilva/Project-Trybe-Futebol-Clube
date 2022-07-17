import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Team from '../database/models/team.model';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test team', () => {
   before(async () => {
    sinon
      .stub(Team, "findOne")
      .resolves([{
        id: 1,
        teamName: 'Avaí/Kindermann',
      },
      {
        id: 2,
        teamName: "Bahia",
      }] as unknown as Team);
  });

  after(()=>{
    (Team.findOne as sinon.SinonStub).restore();
  })

  const team = {
    id: '1',
    teamName: 'Avaí/Kindermann',
  }

  it('se é possivel buscar por um time', async () => {
    const response = await chai.request(app).get('/teams').send(team);

    expect(response.status).to.be.equal(200);
  });


  it('se o corpo de times é um array de objetos', async () => {
    const response = await chai.request(app).get('/teams').send(team);

    expect(response.body).to.be.a('array');
  });
});
