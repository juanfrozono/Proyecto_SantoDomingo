const express = require('express');
const session = require('express-session');
const path = require('path');
const authMiddleware = require('./src/middlewares/authMiddleware');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const PORT = 3000;

//configurar los middlewaes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configurar las sesiones
app.use(session({
    secret: 'contrasena_cookie',
    resave: false,
    saveUninitialized: false
}));

//proeger las rutas pasando por el middleware
app.get('/home.html', authMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/home.html'));
});

//las rutas del login y el registro
app.use('/', authRoutes);

//los archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src/views')));

//prender el servidor
app.listen(PORT, () => {
    console.log(`servidor prendido http://localhost:${PORT}`);
});