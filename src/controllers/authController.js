const db = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.registrar = (req, res) => {
    const { nombre, contrasena } = req.body;
    
        //encriptamos la contrasena con bcrypt
        const hash = bcrypt.hashSync(contrasena, 10);

        //lo metemos en la base de datos
        db.run('INSERT INTO usuarios (nombre, contrasena) VALUES (?, ?)', [nombre, hash], (err) => {
            if (err) return res.send('el usuario ya existe');
            res.send('usuario registrado correctamente. <a href="/login.html">volver para iniciar</a>');
        });
};

exports.login = (req, res) => {
    const { nombre, contrasena } = req.body;

    db.get('SELECT * FROM usuarios WHERE nombre = ?', [nombre], (err, user) => {
        if (!user) return res.send('ese usuario no existe');

        //comparamos la contrasena para ver si es correcta
        if (bcrypt.compareSync(contrasena, user.contrasena)) {
            req.session.usuario = user.nombre;
            res.send('sesion iniciada con exito. <a href="/home.html">entrar</a>');
        } else {
            res.send('contrasena incorrecta');
        }
    });
};