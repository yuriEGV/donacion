/*const Donacion = require('../models/donacion');
const Beneficiario = require('../models/Beneficiario');

exports.crearDonacion = async (req, res) => {
    try {
        const { beneficiario, cantidad } = req.body;

        // Verificar si el beneficiario existe
        const beneficiarioExiste = await Beneficiario.findById(beneficiario);
        if (!beneficiarioExiste) {
            return res.status(404).json({ msg: 'Beneficiario no encontrado' });
        }

        // Crear la donación
        const nuevaDonacion = new Donacion({ beneficiario, cantidad });
        await nuevaDonacion.save();

        res.status(201).json(nuevaDonacion);
    } catch (err) {
        console.error('Error al crear donación:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

exports.obtenerDonaciones = async (req, res) => {
    try {
        // Obtener todas las donaciones y poblar los datos del beneficiario
        const donaciones = await Donacion.find().populate('beneficiario', 'nombre qr');
        res.json(donaciones);
    } catch (err) {
        console.error('Error al obtener donaciones:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

exports.obtenerDonacionesPorBeneficiario = async (req, res) => {
    try {
        // Obtener donaciones por ID de beneficiario y poblar los datos del beneficiario
        const donaciones = await Donacion.find({ beneficiario: req.params.id }).populate('beneficiario', 'nombre qr');
        res.json(donaciones);
    } catch (err) {
        console.error('Error al obtener donaciones por beneficiario:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

exports.generarReporte = async (req, res) => {
    try {
        // Obtener todas las donaciones y calcular el total de donaciones
        const donaciones = await Donacion.find().populate('beneficiario', 'nombre qr');
        const totalDonaciones = donaciones.reduce((total, donacion) => total + donacion.cantidad, 0);

        // Generar el reporte
        const reporte = {
            totalDonaciones,
            cantidadDonaciones: donaciones.length,
            donaciones,
        };

        res.json(reporte);
    } catch (err) {
        console.error('Error al generar el reporte:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};*/

/*const Donacion = require('../models/Donacion');

exports.crearDonacion = async (req, res) => {
    try {
        const { monto, beneficiarioId, metodoPago } = req.body;

        // Calcular comisión del 5%
        const comision = monto * 0.05;
        const montoFinal = monto - comision;

        const nuevaDonacion = new Donacion({
            montoOriginal: monto,
            montoDonado: montoFinal,
            comision,
            beneficiario: beneficiarioId,
            metodoPago,
            cuentaComision: {
                banco: 'Scotiabank',
                tipo: 'Cuenta Corriente',
                numero: '9903 66373'
            },
            fecha: new Date()
        });

        const donacionGuardada = await nuevaDonacion.save();
        res.status(201).json(donacionGuardada);
    } catch (error) {
        console.error('Error al registrar la donación:', error.message);
        res.status(500).json({ msg: 'Error al procesar la donación' });
    }
};*/


/*const Donacion = require('../models/Donacion');

exports.crearDonacion = async (req, res) => {
    try {
        const { monto, beneficiarioId, metodoPago } = req.body;

        if (!monto || !beneficiarioId || !metodoPago) {
            return res.status(400).json({ msg: 'Todos los campos son obligatorios: monto, beneficiarioId y metodoPago' });
        }

        // Calcular comisión del 5%
        const comision = parseFloat((monto * 0.05).toFixed(2));
        const montoFinal = parseFloat((monto - comision).toFixed(2));

        const nuevaDonacion = new Donacion({
            montoOriginal: monto,
            montoDonado: montoFinal,
            comision,
            beneficiario: beneficiarioId,
            metodoPago,
            cuentaComision: {
                banco: 'Scotiabank',
                tipo: 'Cuenta Corriente',
                numero: '9903 66373'
            },
            fecha: new Date()
        });

        const donacionGuardada = await nuevaDonacion.save();
        res.status(201).json(donacionGuardada);

    } catch (error) {
        console.error('Error al registrar la donación:', error.message);
        res.status(500).json({ msg: 'Error al procesar la donación' });
    }
};

*/


/*const Donacion = require('../models/Donacion');

exports.crearDonacion = async (req, res) => {
    try {
        const { monto, beneficiarioId, metodoPago } = req.body;

        // Validación de campos obligatorios
        if (!monto || !beneficiarioId || !metodoPago) {
            return res.status(400).json({ msg: 'Todos los campos son obligatorios: monto, beneficiarioId y metodoPago' });
        }

        // Validar que el monto sea un número positivo
        if (isNaN(monto) || monto <= 0) {
            return res.status(400).json({ msg: 'El monto debe ser un número positivo' });
        }

        // Calcular comisión del 5%
        const comision = parseFloat((monto * 0.05).toFixed(2));  // 5% de comisión
        const montoFinal = parseFloat((monto - comision).toFixed(2));  // Resto de la comisión

        // Crear la nueva donación con los datos proporcionados
        const nuevaDonacion = new Donacion({
            montoOriginal: monto,
            montoDonado: montoFinal,
            comision,
            beneficiario: beneficiarioId,
            metodoPago,
            cuentaComision: {
                banco: 'Scotiabank',
                tipo: 'Cuenta Corriente',
                numero: '9903 66373'
            },
            fecha: new Date()
        });

        // Guardar la donación en la base de datos
        const donacionGuardada = await nuevaDonacion.save();
        return res.status(201).json(donacionGuardada);

    } catch (error) {
        // Manejo de errores con el log y respuesta adecuada
        console.error('Error al registrar la donación:', error.message);
        return res.status(500).json({ msg: 'Error al procesar la donación' });
    }
};
*/




// donacionController.js
const Donacion = require('../models/Donacion');

exports.crearDonacion = async (req, res) => {
  try {
    const { monto, beneficiarioId, metodoPago } = req.body;

    if (!monto || !beneficiarioId || !metodoPago) {
      return res.status(400).json({ msg: 'Todos los campos son obligatorios: monto, beneficiarioId y metodoPago' });
    }

    // Calcular comisión del 5%
    const comision = parseFloat((monto * 0.05).toFixed(2));
    const montoFinal = parseFloat((monto - comision).toFixed(2));

    const nuevaDonacion = new Donacion({
      montoOriginal: monto,
      montoDonado: montoFinal,
      comision,
      beneficiario: beneficiarioId,
      metodoPago,
      cuentaComision: {
        banco: 'Scotiabank',
        tipo: 'Cuenta Corriente',
        numero: '9903 66373'
      },
      fecha: new Date()
    });

    const donacionGuardada = await nuevaDonacion.save();
    res.status(201).json(donacionGuardada);
  } catch (error) {
    console.error('Error al registrar la donación:', error.message);
    res.status(500).json({ msg: 'Error al procesar la donación' });
  }
};

exports.obtenerDonaciones = async (req, res) => {
  try {
    const donaciones = await Donacion.find();
    res.status(200).json(donaciones);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener las donaciones' });
  }
};

exports.obtenerDonacionesPorBeneficiario = async (req, res) => {
  try {
    const { id } = req.params;
    const donaciones = await Donacion.find({ beneficiario: id });
    res.status(200).json(donaciones);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener las donaciones del beneficiario' });
  }
};

exports.generarReporte = async (req, res) => {
  try {
    const donaciones = await Donacion.find();
    // Aquí podrías implementar lógica para generar un reporte si es necesario
    res.status(200).json(donaciones);
  } catch (error) {
    res.status(500).json({ msg: 'Error al generar el reporte' });
  }
};

exports.obtenerComisiones = async (req, res) => {
  try {
    const comisiones = await Donacion.aggregate([
      { $group: { _id: null, totalComisiones: { $sum: '$comision' } } }
    ]);
    res.status(200).json(comisiones);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener las comisiones' });
  }
};
