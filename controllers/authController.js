/*const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar el usuario por email
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ msg: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, usuario.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // Generar el token JWT
        const payload = {
            usuario: {
                id: usuario._id,
            },
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Enviar la respuesta con el token
        res.json({ token });
    } catch (err) {
        console.error('Error en el login:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

exports.registro = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        let usuario = await usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Crear un nuevo usuario
        usuario = new usuario({
            email,
            password,
        });

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(password, salt);

        // Guardar el usuario en la base de datos
        await usuario.save();

        // Generar el token JWT
        const payload = {
            usuario: {
                id: usuario._id,
            },
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Enviar la respuesta con el token
        res.json({ token });
    } catch (err) {
        console.error('Error en el registro:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

exports.obtenerUsuario = async (req, res) => {
    try {
        // Obtener el usuario sin la contraseña
        const usuario = await Usuario.findById(req.usuario.id).select('-password');
        res.json(usuario);
    } catch (err) {
        console.error('Error al obtener el usuario:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};*/

/*const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error en el login:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

exports.registro = async (req, res) => {
    const { email, password } = req.body;
    try {
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }
        usuario = new Usuario({ email, password });
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(password, salt);
        await usuario.save();
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error en el registro:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

exports.obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password');
        res.json(usuario);
    } catch (err) {
        console.error('Error al obtener el usuario:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};*/

/*const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

// Función para login de usuario
exports.loginUsuario = async (req, res) => {
    const { email, password } = req.body;

    // Validación de entrada
    if (!email || !password) {
        return res.status(400).json({ msg: 'Email y contraseña son requeridos' });
    }

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // Crear el JWT
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error en el login:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

// Función para registrar nuevo usuario
exports.registrarUsuario = async (req, res) => {
    const { email, password } = req.body;

    // Validación de entrada
    if (!email || !password) {
        return res.status(400).json({ msg: 'Email y contraseña son requeridos' });
    }

    try {
        // Verificar si el usuario ya existe
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Crear un nuevo usuario
        usuario = new Usuario({ email, password });

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(password, salt);

        // Guardar el usuario en la base de datos
        await usuario.save();

        // Crear el JWT
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error en el registro:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

// Función para obtener el usuario autenticado
exports.obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password');
        res.json(usuario);
    } catch (err) {
        console.error('Error al obtener el usuario:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};*/



const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

// Función para login de usuario
exports.loginUsuario = async (req, res) => {
    const { email, password } = req.body;

    // Validación de entrada
    if (!email || !password) {
        return res.status(400).json({ msg: 'Email y contraseña son requeridos' });
    }

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        // Crear el JWT
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error en el login:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

// Función para registrar nuevo usuario
exports.registrarUsuario = async (req, res) => {
    const { email, password } = req.body;

    // Validación de entrada
    if (!email || !password) {
        return res.status(400).json({ msg: 'Email y contraseña son requeridos' });
    }

    try {
        // Verificar si el usuario ya existe
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Crear un nuevo usuario
        usuario = new Usuario({ email, password });

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(password, salt);

        // Guardar el usuario en la base de datos
        await usuario.save();

        // Crear el JWT
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error en el registro:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

// Función para obtener el usuario autenticado
exports.obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password');
        res.json(usuario);
    } catch (err) {
        console.error('Error al obtener el usuario:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

// Función para actualizar los datos del usuario autenticado
exports.actualizarUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findById(req.usuario.id);

        if (email) usuario.email = email;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            usuario.password = await bcrypt.hash(password, salt);
        }

        await usuario.save();
        res.json({ msg: 'Usuario actualizado correctamente' });
    } catch (err) {
        console.error('Error al actualizar:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

// Función para eliminar el usuario autenticado
exports.eliminarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.usuario.id);
        res.json({ msg: 'Usuario eliminado' });
    } catch (err) {
        console.error('Error al eliminar:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};
