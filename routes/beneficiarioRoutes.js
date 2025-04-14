/*const express = require('express');
const beneficiarioController = require('../controllers/beneficiarioController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Crear un beneficiario
router.post('/', authMiddleware, beneficiarioController.crearBeneficiario);

// Obtener todos los beneficiarios
router.get('/', authMiddleware, beneficiarioController.obtenerBeneficiarios);

// Obtener un beneficiario por su ID
router.get('/:id', authMiddleware, beneficiarioController.obtenerBeneficiarioPorId);

// Actualizar un beneficiario
router.put('/:id', authMiddleware, beneficiarioController.actualizarBeneficiario);

// Eliminar un beneficiario
router.delete('/:id', authMiddleware, beneficiarioController.eliminarBeneficiario);

// Ruta para manejar la creación de beneficiarios
router.post('/api/beneficiarios', upload.single('photo'), async (req, res) => {
    const { name, age, email } = req.body;
    const photo = req.file.path;

    const newBeneficiary = new Beneficiary({ name, age, email, photo });
    try {
        const savedBeneficiary = await newBeneficiary.save();
        res.status(201).json(savedBeneficiary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;*/

/*const express = require('express');
const router = express.Router();
const multer = require('multer'); // Asegúrate de importar multer
const path = require('path');
const Beneficiario = require('../models/Beneficiario');
const beneficiarioController = require('../controllers/beneficiarioController');
const auth = require('../middlewares/authMiddleware');


// obtener beneficiario

router.get('/', auth, beneficiarioController.obtenerBeneficiarios);

// Configurar multer para subir imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage }); // Aquí definimos el middleware 'upload'

// Crear un beneficiario
router.post('/', upload.single('photo'), async (req, res) => {
  const { name, age, email } = req.body;
  const photo = req.file?.path;

  try {
    const nuevoBeneficiario = new Beneficiario({ name, age, email, photo });
    const saved = await nuevoBeneficiario.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const multer = require('multer'); // Importar multer para manejar archivos
const path = require('path');
const Beneficiario = require('../models/Beneficiario');
const beneficiarioController = require('../controllers/beneficiarioController');
const auth = require('../middlewares/authMiddleware');

// Obtener todos los beneficiarios (con autenticación)
router.get('/', auth, beneficiarioController.obtenerBeneficiarios);

// Configurar multer para la carga de imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),  // Directorio de destino
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),  // Nombre del archivo
});
const upload = multer({ storage });  // Definir el middleware 'upload'

// Ruta para crear un nuevo beneficiario (con archivo de imagen)
router.post('/', auth, upload.single('photo'), async (req, res) => {
  const { name, age, email } = req.body;
  const photo = req.file?.path;  // Si se ha subido una imagen, obtiene el path

  try {
    const nuevoBeneficiario = new Beneficiario({ name, age, email, photo });
    const saved = await nuevoBeneficiario.save();  // Guardar el beneficiario en la base de datos
    res.status(201).json(saved);  // Responder con el beneficiario creado
  } catch (error) {
    res.status(400).json({ message: error.message });  // Responder con el error
  }
});

module.exports = router;
