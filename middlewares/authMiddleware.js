/*const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.authMiddleware = (req, res, next) => {
    // Obtener el token del encabezado de la solicitud
    const token = req.header('x-auth-token');

    // Verificar si no hay token
    if (!token) {
        return res.status(401).json({ msg: 'No hay token, autorización denegada' });
    }

    try {
        // Verificar y decodificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Asignar el usuario decodificado a la solicitud
        req.usuario = decoded.usuario;

        // Continuar con el siguiente middleware o controlador
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token no válido' });
    }
};*/

/*const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No hay token, autorización denegada' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token no válido' });
    }
};*/
/*const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No hay token, autorización denegada' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token no válido' });
    }
};

module.exports = authMiddleware; // Cambia esto*/

/*const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'No hay token, autorización denegada' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secreto');
    req.usuario = decoded.usuario;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token no válido' });
  }
};*/
/*const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({ msg: 'Falta el encabezado Authorization' });
  }

  const token = authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : authHeader;

  if (!token) {
    return res.status(401).json({ msg: 'Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secreto_super_seguro');
    req.usuario = decoded.usuario;
    next();
  } catch (err) {
    console.error('Error al verificar token:', err.message);
    res.status(401).json({ msg: 'Token inválido o expirado' });
  }
};

module.exports = auth;

*/

/*const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ msg: 'No hay token, acceso denegado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token no válido' });
    }
};

module.exports = authMiddleware;*/

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  // o 'Authorization'

    if (!token) {
        return res.status(401).json({ msg: 'No hay token, autorización denegada' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;  // Asigna el ID del usuario al objeto `req` para usarlo en las siguientes rutas
        next();  // Continúa al siguiente middleware o ruta
    } catch (err) {
        res.status(401).json({ msg: 'Token no válido' });
    }
};

