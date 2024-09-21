const request = require('supertest');
const app = require('../../app'); 
const mongoose = require('mongoose');


let token;

beforeAll(async () => {
  
  const loginResponse = await request(app).post('/api/auth/login').send({
    correo: "funcionario1@gmail.com",
    password: "funcionario1"
  });

  
  console.log('Login Response:', loginResponse.body);

  
  expect(loginResponse.statusCode).toBe(200);

  
  token = loginResponse.body.dataUser.token;
});

test('Debería permitir acceder a una ruta protegida con token válido', async () => {
  const response = await request(app)
    .get('/api/auth/verify-token') 
    .set('Cookie', `token=${token}`); 

  console.log('Protected Route Response:', response.body); 
  expect(response.statusCode).toBe(200);
  
});

afterAll(async () => {
  
  await mongoose.connection.close();
});
