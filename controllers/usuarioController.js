/*const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registrar usuario
exports.registrarUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    usuario = new Usuario({ nombre, email, password });

    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);

    await usuario.save();

    // Crear y devolver el token
    const payload = { usuario: { id: usuario.id } };
    const token = jwt.sign(payload, 'secreto_super_seguro', { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

// Login
exports.loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ msg: 'Credenciales inválidas' });
    }

    const esPasswordValido = await bcrypt.compare(password, usuario.password);
    if (!esPasswordValido) {
      return res.status(400).json({ msg: 'Credenciales inválidas' });
    }

    const payload = { usuario: { id: usuario.id } };
    const token = jwt.sign(payload, 'secreto_super_seguro', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};*/

/*const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registrar usuario
exports.registrarUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const nuevoUsuario = new Usuario({ nombre, email, password: passwordHash });
    await nuevoUsuario.save();

    const payload = { usuario: { id: nuevoUsuario.id } };
    const token = jwt.sign(payload, 'secreto_super_seguro', { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error) {
    console.error('Error al registrar usuario:', error.message);
    res.status(500).send('Error en el servidor');
  }
};

// Login de usuario
exports.loginUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ msg: 'Credenciales inválidas' });
    }

    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      return res.status(400).json({ msg: 'Credenciales inválidas' });
    }

    const payload = { usuario: { id: usuario.id } };
    const token = jwt.sign(payload, 'secreto_super_seguro', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error al hacer login:', error.message);
    res.status(500).send('Error en el servidor');
  }
};

// Obtener datos del usuario autenticado
exports.obtenerusuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuario.id).select('-password');
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }
    res.json(usuario);

  } catch (error) {
    console.error('Error al obtener perfil:', error.message);
    res.status(500).send('Error en el servidor');
  }
};

// Actualizar usuario
exports.actualizarUsuario = async (req, res) => {
  const { nombre, email } = req.body;

  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.usuario.id,
      { nombre, email },
      { new: true, runValidators: true }
    ).select('-password');

    res.json(usuarioActualizado);
  } catch (error) {
    console.error('Error al actualizar usuario:', error.message);
    res.status(500).send('Error en el servidor');
  }
};

// Eliminar usuario
exports.eliminarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.usuario.id);
    res.json({ msg: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error.message);
    res.status(500).send('Error en el servidor');
  }
};
*/

const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro de usuario
exports.registrarUsuario = async (req, res) => {
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

// Login de usuario
exports.loginUsuario = async (req, res) => {
    const { email, password } = req.body;
    console.log('Email:', email);
    console.log('Password:', password);  // Asegúrate de que el password no sea null
    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
          console.log('Credenciales no válidas');
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error en el login:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

// Obtener perfil del usuario
exports.obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password');
        res.json(usuario);
    } catch (err) {
        console.error('Error al obtener el perfil:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

// Actualizar perfil del usuario
exports.actualizarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.usuario.id, req.body, { new: true });
        res.json(usuario);
    } catch (err) {
        console.error('Error al actualizar el perfil:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};

// Eliminar usuario
exports.eliminarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.usuario.id);
        res.json({ msg: 'Usuario eliminado' });
    } catch (err) {
        console.error('Error al eliminar el usuario:', err.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};
