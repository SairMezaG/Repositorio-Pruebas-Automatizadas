const request = require('supertest');
const app = require('../../app'); // Ajusta la ruta según la ubicación de tu archivo app.js
const mongoose = require('mongoose');

/* let token;

beforeAll(async () => {
  // Inicia sesión con un usuario ya registrado
  const loginResponse = await request(app).post('/api/auth/login').send({
    correo: "lider@gmail.com",
    password: "lider1"
  });

  // Imprime la respuesta para verificar su estructura
  console.log('Login Response:', loginResponse.body);

  // Asegúrate de que el login sea exitoso
  expect(loginResponse.statusCode).toBe(200);

  // Ajusta el acceso al token según la estructura real de la respuesta
  token = loginResponse.body.dataUser.token;
});

test('Debería permitir acceder a una ruta protegida con token válido', async () => {
  const response = await request(app)
    .get('/api/auth/verify-token') // Cambia esto por la ruta protegida que quieras probar
    .set('Cookie', `token=${token}`); // Incluye el token en las cookies

  console.log('Protected Route Response:', response.body); // Imprime la respuesta para depuración

  expect(response.statusCode).toBe(200);
  // Aquí puedes agregar más expectativas según la respuesta esperada
});

afterAll(async () => {
  // Limpia la base de datos después de las pruebas si es necesario
  await mongoose.connection.close();
});
 */




/* let token;

beforeAll(async () => {
  // Inicia sesión con un usuario ya registrado
  const loginResponse = await request(app).post('/api/auth/login').send({
    correo: "tecnico1@gmail.com",
    password: "tecnico1"
  });

  // Imprime la respuesta para verificar su estructura
  console.log('Login Response:', loginResponse.body);

  // Asegúrate de que el login sea exitoso
  expect(loginResponse.statusCode).toBe(200);

  // Ajusta el acceso al token según la estructura real de la respuesta
  token = loginResponse.body.dataUser.token;
});

test('Debería permitir acceder a una ruta protegida con token válido', async () => {
  const response = await request(app)
    .get('/api/auth/verify-token') // Cambia esto por la ruta protegida que quieras probar
    .set('Cookie', `token=${token}`); // Incluye el token en las cookies

  console.log('Protected Route Response:', response.body); // Imprime la respuesta para depuración

  expect(response.statusCode).toBe(200);
  // Aquí puedes agregar más expectativas según la respuesta esperada
});

afterAll(async () => {
  // Limpia la base de datos después de las pruebas si es necesario
  await mongoose.connection.close();
}); */



let token;

beforeAll(async () => {
  // Inicia sesión con un usuario ya registrado
  const loginResponse = await request(app).post('/api/auth/login').send({
    correo: "funcionario1@gmail.com",
    password: "funcionario1"
  });

  // Imprime la respuesta para verificar su estructura
  console.log('Login Response:', loginResponse.body);

  // Asegúrate de que el login sea exitoso
  expect(loginResponse.statusCode).toBe(200);

  // Ajusta el acceso al token según la estructura real de la respuesta
  token = loginResponse.body.dataUser.token;
});

test('Debería permitir acceder a una ruta protegida con token válido', async () => {
  const response = await request(app)
    .get('/api/auth/verify-token') // Cambia esto por la ruta protegida que quieras probar
    .set('Cookie', `token=${token}`); // Incluye el token en las cookies

  console.log('Protected Route Response:', response.body); // Imprime la respuesta para depuración

  expect(response.statusCode).toBe(200);
  // Aquí puedes agregar más expectativas según la respuesta esperada
});

afterAll(async () => {
  // Limpia la base de datos después de las pruebas si es necesario
  await mongoose.connection.close();
});
