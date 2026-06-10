module.exports = (req, res, next) => {
    //si la sesion esta iniciada lo dejamos pasar, si no lo denegamos y que vuelva a meter los datos
    if (req.session && req.session.usuario) {
        return next();
    }

    res.send('acceso denegado, <a href="/login.html">inicia sesión</a> primero');
};