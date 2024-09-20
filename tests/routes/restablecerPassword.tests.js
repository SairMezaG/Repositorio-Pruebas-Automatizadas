/* const request = require('supertest');
const app = require('../../app'); // Ajusta la ruta según la ubicación de tu archivo app.js
const crypto = require('crypto');
const mongoose = require('mongoose');
const { usuarioModel } = require('../../models'); // Ajusta la ruta según la ubicación de tu modelo

let token;

describe('POST /api/recuperarPassword', () => {
  beforeAll(async () => {
    // Solicitar restablecimiento de contraseña para obtener el token
    const response = await request(app)
      .post('/api/recuperarPassword')
      .send({ correo: 'z.meza.g@hotmail.com' }); // Asegúrate de usar un correo válido en tu base de datos de pruebas

    expect(response.statusCode).toBe(200);

    // Obtener el token del correo enviado
    const user = await usuarioModel.findOne({ correo: 'z.meza.g@hotmail.com' });
    token = user.resetPasswordToken; // Usa el token real del usuario
  });

  it('debería restablecer la contraseña correctamente', async () => {
    const response = await request(app)
      .post(`/api/restablecerPassword/${token}`)
      .send({ password: 'sair1234', confirmPassword: 'sair1234' });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Contraseña restablecida correctamente.');
  });

  it('debería devolver un error si el token es inválido o ha expirado', async () => {
    // Simula un token inválido
    const invalidToken = crypto.randomBytes(32).toString('hex');

    const response = await request(app)
      .post(`/api/restablecerPassword/${invalidToken}`)
      .send({ password: 'sair1234', confirmPassword: 'sair1234' });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Token inválido o expirado.');
  });

  it('debería devolver un error si las contraseñas no coinciden', async () => {
    const response = await request(app)
      .post(`/api/restablecerPassword/${token}`)
      .send({ password: 'Sair1234', confirmPassword: 'sair1234' });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Las contraseñas no coinciden.');
  });

  afterAll(async () => {
    // Cerrar conexiones o limpiar recursos
    await mongoose.connection.close();
  });
}); */




const request = require('supertest');
const app = require('../../app'); // Ajusta la ruta según la ubicación de tu archivo app.js
const mongoose = require('mongoose');

let token; // Aquí pegarás el token manualmente

describe('POST /api/recuperarPassword', () => {
  beforeAll(async () => {
    // Aquí puedes colocar manualmente el token que recibes por correo
    token = '332cb43488c81a677ef609cbc4ace042b085a8ed4b946341c09f45cbfa07b548'; // Pega el token que recibes en tu correo
  });

  it('debería restablecer la contraseña correctamente', async () => {
    const response = await request(app)
      .post(`/api/restablecerPassword/${token}`)
      .send({ password: 'sair12345', confirmPassword: 'sair12345' });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Contraseña restablecida correctamente.');
  });

  it('debería devolver un error si el token es inválido o ha expirado', async () => {
    // Simula un token inválido
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
    // Cerrar conexiones o limpiar recursos
    await mongoose.connection.close();
  });
});


