const request = require('supertest');
const app = require('../../app'); 
const mongoose = require('mongoose');

let token; 

describe('POST /api/recuperarPassword', () => {
  beforeAll(async () => {
    
    token = '332cb43488c81a677ef609cbc4ace042b085a8ed4b946341c09f45cbfa07b548'; 
  });

  it('debería restablecer la contraseña correctamente', async () => {
    const response = await request(app)
      .post(`/api/restablecerPassword/${token}`)
      .send({ password: 'sair12345', confirmPassword: 'sair12345' });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Contraseña restablecida correctamente.');
  });

  it('debería devolver un error si el token es inválido o ha expirado', async () => {

    const invalidToken = 'token_invalido';

    const response = await request(app)
      .post(`/api/restablecerPassword/${invalidToken}`)
      .send({ password: 'sair12345', confirmPassword: 'sair12345' });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Token inválido o expirado.');
  });

  it('debería devolver un error si las contraseñas no coinciden', async () => {
    const response = await request(app)
      .post(`/api/restablecerPassword/${token}`)
      .send({ password: 'Sair12345', confirmPassword: 'sair12345' });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Las contraseñas no coinciden.');
  });

  afterAll(async () => {
    
    await mongoose.connection.close();
  });
});


