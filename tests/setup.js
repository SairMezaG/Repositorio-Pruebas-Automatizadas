const mongoose = require('mongoose');
require('dotenv').config({ path: './.env.test' }); // Cargar las variables de entorno de pruebas

// Conexión a MongoDB antes de todas las pruebas
/* beforeAll(async () => {
  const mongoUri = process.env.MONGO_URI_TEST;
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}); */



// Cerrar la conexión después de todas las pruebas
afterAll(async () => {
  await mongoose.disconnect();

});

 
  
  

