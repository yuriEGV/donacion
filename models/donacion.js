/*const mongoose = require('mongoose');

const DonacionSchema = new mongoose.Schema({
    beneficiario: { type: mongoose.Schema.Types.ObjectId, ref: 'Beneficiario', required: true },
    cantidad: { type: Number, required: true },
    fechaDonacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donacion', DonacionSchema);*/


/*const mongoose = require('mongoose');

const DonacionSchema = new mongoose.Schema({
    montoOriginal: { type: Number, required: true },
    montoDonado: { type: Number, required: true },
    comision: { type: Number, required: true },
    beneficiario: { type: mongoose.Schema.Types.ObjectId, ref: 'Beneficiario', required: true },
    metodoPago: { type: String, required: true },
    cuentaComision: {
        banco: String,
        tipo: String,
        numero: String
    },
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donacion', DonacionSchema);*/

const mongoose = require('mongoose');

const DonacionSchema = new mongoose.Schema({
  monto: {
    type: Number,
    required: true
  },
  donante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  beneficiario: {
    type: mongoose.Schema.Types.Mixed, // Puede ser ObjectId o String
    required: true
  },
  tipo: {
    type: String,
    enum: ['donacion', 'comision'],
    default: 'donacion'
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Donacion', DonacionSchema);

