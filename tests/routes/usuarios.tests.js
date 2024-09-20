const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../app');
const user = require('../../models/usuarios');



// Prueba para Registrar un LIDER (Si no lo hay)

/* test('Registrar un Lider (Si no hay un Lider registrado)', async () => {
  const response = await request(app).post('/api/auth/register').send({
      nombre: "Lider",
      correo: "lider@gmail.com",
      rol: "lider",
      telefono: "3007654321",
      password: "lider1",
      confirmPassword: "lider1"
  });

  console.log(response.body); 

  expect(response.statusCode).toBe(200); 
  expect(response.body.message).toBe('Usuario registrado exitosamente.'); // Mensaje esperado
  expect(response.body.data.user).toHaveProperty('_id');
  expect(response.body.data.user).toHaveProperty('nombre', 'Lider');
}, 10000); 



  afterAll(async () => {
    await mongoose.connection.close();
  });  */





// Prueba para Registrar un nuevo TECNICO

/* test('Se ha registrado  un nuevo Tecnico en la ruta: /api/auth/register', async () => {
  const response = await request(app).post('/api/auth/register').send({
      nombre: "Tecnico2",
      correo: "tecnico2@gmail.com",
      rol: "tecnico",
      telefono: "3007654321",
      password: "tecnico2",
      confirmPassword: "tecnico2"
  });

  console.log(response.body); 

  expect(response.statusCode).toBe(200); 
  expect(response.body.message).toBe('Usuario registrado exitosamente. Su cuenta está en espera de aprobación por el Líder TIC.'); // Mensaje esperado
  expect(response.body.data.user).toHaveProperty('_id');
  expect(response.body.data.user).toHaveProperty('nombre', 'Tecnico2');
}, 10000); 



  afterAll(async () => {
    await mongoose.connection.close();
  });   */
  


 
// Prueba para Registrar un nuevo FUNCIONARIO 

/* test('Se ha regsitrado un nuevo Funcionario en la ruta: /api/auth/register ', async () => {
  const response = await request(app)
    .post('/api/auth/register')
    .send({
      nombre: "Funcionario13",
      correo: "funcionario13@gmail.com",
      rol: "funcionario",
      telefono: "3007654321",
      password: "funcionario13",
      confirmPassword: "funcionario13"

    });

  console.log(response.body); 

  expect(response.statusCode).toBe(200); 
  expect(response.body.message).toBe('Usuario registrado exitosamente.'); 
  expect(response.body.data.user).toHaveProperty('_id');
  expect(response.body.data.user).toHaveProperty('nombre', 'Funcionario13');
}, 10000);

afterAll(async () => {
  await mongoose.connection.close();
});  
  */





//Prueba para OBTENER TODOS los Usuarios registrados

describe('Obtener todos los Usuarios segun la ruta/api/usuarios', () => {
  it('Debería obtener todos los usuarios registrados', async () => {
    const response = await request(app)
      .get('/api/usuarios')
      .expect('Content-Type', /json/)
      .expect(200);

    
    console.log(response.body);

   
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
    
  });




afterAll(async () => {
    await mongoose.connection.close();
  }); 


}); 















