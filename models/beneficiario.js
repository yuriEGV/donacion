/*const mongoose = require('mongoose');

const BeneficiarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    foto: { type: String, required: true },
    qr: { type: String, required: true, unique: true },
    fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Beneficiario', BeneficiarioSchema);*/
const mongoose = require('mongoose');

const BeneficiarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    foto: { type: String, required: true },
    qr: { type: String, required: true, unique: true },
    fechaRegistro: { type: Date, default: Date.now }
});

// Usar `mongoose.models.Beneficiario` para evitar sobrescribir el modelo si ya existe
const Beneficiario = mongoose.models.Beneficiario || mongoose.model('Beneficiario', BeneficiarioSchema);

module.exports = Beneficiario;
