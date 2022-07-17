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
      .resolves({
        id: 4,
        team_name: 'Corinthians',
      } as unknown as Team);
  });

  after(() => {
    (Team.findOne as sinon.SinonStub).restore();
  })

  const team = {
    id: 4,
    team_name: 'Corinthians',
  }

  it('se é possivel buscar por um time', async () => {
    const response = await chai.request(app).get('/teams/:id');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.eql(team);
  });


  it('se o corpo de times é um array de objetos', async () => {
    const response = await chai.request(app).get('/teams').send(team);

    expect(response.body).to.be.a('array');
  });

  describe('Test team', () => {
    before(async () => {
     sinon
       .stub(Team, "findAll")
       .resolves([{
         id: 1,
         team_name: 'Avaí/Kindermann',
       },
       {
         id: 2,
         team_name: "Bahia",
       }] as unknown as Team[]);
   });
  
   after(()=>{
     (Team.findAll as sinon.SinonStub).restore();
   })
  
   const teams = [	{
    id: 1,
    team_name: 'Avaí/Kindermann',
  },
  {
    id: 2,
    team_name: 'Bahia',
  },]
  
   it('se é possivel buscar por mais de um time', async () => {
     const response = await chai.request(app).get('/teams');
  
     expect(response.status).to.be.equal(200);
     expect(response.body).to.be.eql(teams)
   });
  
  });
});


