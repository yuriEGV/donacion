const Beneficiario = require('../models/Beneficiario');

exports.crearBeneficiario = async (req, res) => {
    try {
        const { nombre, foto, qr } = req.body;
        const nuevoBeneficiario = new Beneficiario({ nombre, foto, qr });
        await nuevoBeneficiario.save();
        res.status(201).json(nuevoBeneficiario);
    } catch (err) {
        console.error('Error al crear beneficiario:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

exports.obtenerBeneficiarios = async (req, res) => {
    try {
        const beneficiarios = await Beneficiario.find();
        res.json(beneficiarios);
    } catch (err) {
        console.error('Error al obtener beneficiarios:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

exports.obtenerBeneficiarioPorId = async (req, res) => {
    try {
        const beneficiario = await Beneficiario.findById(req.params.id);
        if (!beneficiario) {
            return res.status(404).json({ msg: 'Beneficiario no encontrado' });
        }
        res.json(beneficiario);
    } catch (err) {
        console.error('Error al obtener beneficiario:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

exports.actualizarBeneficiario = async (req, res) => {
    try {
        const { nombre, foto, qr } = req.body;
        const beneficiario = await Beneficiario.findByIdAndUpdate(
            req.params.id,
            { nombre, foto, qr },
            { new: true }
        );
        if (!beneficiario) {
            return res.status(404).json({ msg: 'Beneficiario no encontrado' });
        }
        res.json(beneficiario);
    } catch (err) {
        console.error('Error al actualizar beneficiario:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

exports.eliminarBeneficiario = async (req, res) => {
    try {
        const beneficiario = await Beneficiario.findByIdAndDelete(req.params.id);
        if (!beneficiario) {
            return res.status(404).json({ msg: 'Beneficiario no encontrado' });
        }
        res.json({ msg: 'Beneficiario eliminado' });
    } catch (err) {
        console.error('Error al eliminar beneficiario:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};