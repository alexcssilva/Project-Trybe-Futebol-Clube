import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/user.model';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test login', () => {
   before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        id: 1,
        username: 'Alex',
        role: 'user',
        email: 'test@trybe.com',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'
      } as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  const login = {
    email: 'test@trybe.com',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
  }

  it('se é possivel acessar com a validação do token', async () => {
    const response = await chai.request(app).post('/login').send(login);

    expect(response.status).to.be.equal(201);
    expect(response.body).have.property('token');
  });
});
