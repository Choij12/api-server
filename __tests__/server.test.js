'use strict';

const { db } = require('../src/models');
const app = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(app.app); 

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing our Server', () => {
  xit('Should fetch all foods on GET to /food', async () => {
    const response = await request.get('/food');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
  });
  xit('Should CREATE and add a record to the database', async () => {
    const body = {category: 'Produce', name: 'Banana'};
    const response = await request.post('/food').send(body).set('Content-type', 'application/json');
    expect(response.statusCode).toBe(200);
  });
  xit('Should UPDATE a specific record in the database', async () => {
    const response = await request.put('/food/1');

    expect(response.status).toBe(200);
  });
  it('Should DELETE a specific record in the database', async () => {
    await request.delete('/food/1');
    let updatedResponse = await request.get('/food/1');

    expect(updatedResponse.status).toBe(404);
  });
  it('Should reject PATCH requests', async () => {
    const response = await request.patch('/');

    expect(response.status).toBe(404);
  });
});