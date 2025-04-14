/*const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Ruta para el login
router.post('/login', authController.login);

// Ruta para el registro
router.post('/registro', authController.registro);

// Ruta para obtener el usuario autenticado
router.get('/usuario', authMiddleware, authController.obtenerUsuario);

module.exports = router;*/

/*const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Ruta para el login
router.post('/login', authController.login);

// Ruta para el registro
router.post('/registro', authController.registro);

// Ruta para obtener el usuario autenticado
router.get('/usuario', authMiddleware, authController.obtenerUsuario);

module.exports = router;*/


/*const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middlewares/authMiddleware');


// Ruta para registrar un nuevo usuario
router.post('/register', usuarioController.registrarUsuario);

// Ruta para hacer login
router.post('/login', usuarioController.loginUsuario);

// Obtener perfil del usuario autenticado
router.get('/perfil', auth, usuarioController.obtenerPerfil);

// Actualizar datos del usuario autenticado
router.put('/perfil', auth, usuarioController.actualizarUsuario);

// Eliminar usuario autenticado
router.delete('/perfil', auth, usuarioController.eliminarUsuario);

module.exports = router;
*/

/*const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta para login
router.post('/login', authController.login);

// Ruta para registro
router.post('/register', authController.registro);

// Ruta para obtener el perfil (requiere autenticación)
router.get('/perfil', authMiddleware, authController.obtenerUsuario);

module.exports = router;*/
/*
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // Asegúrate de que el controlador esté correctamente importado
const auth = require('../middlewares/authMiddleware');  // El middleware también debe ser importado correctamente

// Ruta para registrar un nuevo usuario
router.post('/register', authController.registro);  // Asegúrate de que `registro` esté definido en `authController`

// Ruta para hacer login
router.post('/login', authController.login);  // Asegúrate de que `login` esté definido en `authController`

module.exports = router;
*/
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // Asegúrate de que la ruta del controlador sea correcta
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta para registrar un nuevo usuario
router.post('/register', authController.registrarUsuario);  // Revisa que `registrarUsuario` esté correctamente exportado

// Ruta para hacer login
router.post('/login', authController.loginUsuario);  // Revisa que `loginUsuario` esté correctamente exportado

module.exports = router;

