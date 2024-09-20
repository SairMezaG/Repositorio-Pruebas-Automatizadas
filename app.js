require("dotenv").config();
const express = require("express");
const { app, server } = require('./utils/handleSocket'); // Importa app y server
const path = require('path');
const cors = require("cors");
const dbConnect = require('./config/mongo');
const cookieParser = require('cookie-parser');
const morgan = require("morgan");

// Configuración de Express en la app
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/media', express.static(path.join(__dirname, 'media')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("storage"));

// Invoca las rutas de la API
app.use("/api", require("./routes"));

// Conecta a la base de datos
dbConnect();

// Exportar app para pruebas (sin levantar server)
module.exports = app;

// Escucha en el puerto usando server.listen sólo si no es en pruebas
if (require.main === module) {
  const port = process.env.PORT || 8000;
  server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}


