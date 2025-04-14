/*const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario } = require('../controllers/usuarioController');
const auth = require('../middleware/authMiddleware');

router.get('/authMiddleware', auth, (req, res) => {
  res.json({ msg: 'Ruta protegida, usuario autenticado', userId: req.usuario.id });
});


router.post('/register', registrarUsuario);
router.post('/login', loginUsuario);

module.exports = router;
*/

/*const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario } = require('../controllers/usuarioController');
const auth = require('../middleware/authMiddleware'); // Importar middleware

// Rutas públicas
router.post('/register', registrarUsuario);
router.post('/login', loginUsuario);

// Ruta protegida de prueba
router.get('/auth', auth, (req, res) => {
  res.json({ msg: 'Ruta protegida, acceso autorizado', usuario: req.usuario });
});

module.exports = router;*/
/*const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');

// Ruta para registrar un nuevo usuario
router.post('/register', authController.registrarUsuario);

// Ruta para hacer login
router.post('/login', authController.loginUsuario);

// Obtener todos los usuarios
router.get('/', auth, authController.obtenerUsuario);


// Obtener perfil del usuario autenticado
router.get('/usuario', auth, authController.obtenerUsuario);

// Actualizar datos del usuario autenticado
router.put('/usuario', auth, authController.actualizarUsuario);

// Eliminar usuario autenticado
router.delete('/usuario', auth, authController.eliminarUsuario);

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middlewares/authMiddleware');  // Middleware para proteger rutas
const authController = require('../controllers/authController');

// Ruta para registrar un nuevo usuario
router.post('/register', authController.registrarUsuario);

// Ruta para hacer login
// Aquí NO aplicamos el middleware de autenticación porque esta ruta se utiliza para obtener el token
router.post('/login', authController.loginUsuario);

// Obtener todos los usuarios
// Esta ruta está protegida, por eso usamos el middleware `auth`
router.get('/', auth, authController.obtenerUsuario);

// Obtener perfil del usuario autenticado
// Ruta protegida para obtener el perfil del usuario autenticado
router.get('/usuario', auth, authController.obtenerUsuario);

// Actualizar datos del usuario autenticado
// Ruta protegida para actualizar el perfil del usuario autenticado
router.put('/usuario', auth, authController.actualizarUsuario);

// Eliminar usuario autenticado
// Ruta protegida para eliminar el usuario autenticado
router.delete('/usuario', auth, authController.eliminarUsuario);

module.exports = router;
