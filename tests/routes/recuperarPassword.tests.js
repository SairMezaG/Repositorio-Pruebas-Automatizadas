/* const request = require('supertest');
const app = require('../../app'); // Ajusta la ruta según la ubicación de tu archivo app.js

describe('POST /api/recuperarPassword', () => {
  it('debería enviar un correo de recuperación de contraseña si el usuario existe', async () => {
    const response = await request(app)
      .post('/api/recuperarPassword')
      .send({ correo: 'z.meza.g@hotmail.com' }); // Asegúrate de usar un correo válido en tu base de datos de pruebas

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Correo electrónico enviado');
  });

  it('debería devolver un error si el correo no existe', async () => {
    const response = await request(app)
      .post('/api/recuperarPassword')
      .send({ correo: 'noexiste@hotmail.com' });

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Usuario no encontrado');
  });

  afterAll(async () => {
    // Cerrar conexiones o limpiar recursos
    await mongoose.connection.close();
  });
}); */

const request = require('supertest');
const mongoose = require('mongoose'); 
const app = require('../../app'); 

describe('POST /api/recuperarPassword', () => {
  it('debería enviar un correo de recuperación de contraseña si el usuario existe', async () => {
    const response = await request(app)
      .post('/api/recuperarPassword')
      .send({ correo: 'z.meza.g@hotmail.com' }); 

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Correo electrónico enviado');
  });

  it('debería devolver un error si el correo no existe', async () => {
    const response = await request(app)
      .post('/api/recuperarPassword')
      .send({ correo: 'noexiste@hotmail.com' });

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Usuario no encontrado');
  });



  //Esto cierra la conexion a la base de datos
  afterAll(async () => {
    // 
    await mongoose.connection.close(); 
  });
});
