/*const express = require('express');
const donacionController = require('../controllers/donacionController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Crear una donación
router.post('/', authMiddleware, donacionController.crearDonacion);

// Obtener todas las donaciones
router.get('/', authMiddleware, donacionController.obtenerDonaciones);

// Obtener donaciones por beneficiario
router.get('/beneficiario/:id', authMiddleware, donacionController.obtenerDonacionesPorBeneficiario);

// Generar un reporte de donaciones
router.get('/reporte', authMiddleware, donacionController.generarReporte);

router.get('/comisiones', auth, donacionController.obtenerComisiones);


module.exports = router*/


/*const express = require('express');
const donacionController = require('../controllers/donacionController');
const authMiddleware = require('../middlewares/authMiddleware');  // Asegúrate de que la ruta esté bien

const router = express.Router();

// Crear una donación
router.post('/', authMiddleware, donacionController.crearDonacion);

// Obtener todas las donaciones
router.get('/', authMiddleware, donacionController.obtenerDonaciones);

// Obtener donaciones por beneficiario
router.get('/beneficiario/:id', authMiddleware, donacionController.obtenerDonacionesPorBeneficiario);

// Generar un reporte de donaciones
router.get('/reporte', authMiddleware, donacionController.generarReporte);

// Obtener las comisiones
router.get('/comisiones', authMiddleware, donacionController.obtenerComisiones);

module.exports = router;
*/


// donacionRoutes.js
const express = require('express');
const donacionController = require('../controllers/donacionController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Crear una donación
router.post('/', authMiddleware, donacionController.crearDonacion);

// Obtener todas las donaciones
router.get('/', authMiddleware, donacionController.obtenerDonaciones);

// Obtener donaciones por beneficiario
router.get('/beneficiario/:id', authMiddleware, donacionController.obtenerDonacionesPorBeneficiario);

// Generar un reporte de donaciones
router.get('/reporte', authMiddleware, donacionController.generarReporte);

// Obtener comisiones
router.get('/comisiones', authMiddleware, donacionController.obtenerComisiones);

module.exports = router;
