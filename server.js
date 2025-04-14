/*const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const beneficiarioRoutes = require('./routes/beneficiarioRoutes');
const donacionRoutes = require('./routes/donacionRoutes');

dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Rutas de beneficiarios (protegidas)
app.use('/api/beneficiarios', beneficiarioRoutes);

// Rutas de donaciones (protegidas)
app.use('/api/donaciones', donacionRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API de Donaciones está funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});*/
/*const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const beneficiarioRoutes = require('./routes/beneficiarioRoutes');
const donacionRoutes = require('./routes/donacionRoutes');

dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Rutas de beneficiarios (protegidas)
app.use('/api/beneficiarios', beneficiarioRoutes);

// Rutas de donaciones (protegidas)
app.use('/api/donaciones', donacionRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API de Donaciones está funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});*/

const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const beneficiarioRoutes = require('./routes/beneficiarioRoutes');
const donacionRoutes = require('./routes/donacionRoutes');
const multer = require('multer');
const path = require('path');
const usuarioRoutes = require('./routes/usuarioRoutes');

dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());



app.use('/api/usuarios', usuarioRoutes);


// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Rutas de beneficiarios (protegidas)
app.use('/api/beneficiarios', beneficiarioRoutes);



// Rutas de donaciones (protegidas)
app.use('/api/donaciones', donacionRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json('API de Donaciones está funcionando');
});

// Configuración de Multer para manejar la carga de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
   
