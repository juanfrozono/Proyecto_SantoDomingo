const sqlite3 = require('sqlite3').verbose();
const path = require('path');

//crea la base de datos y la conecta al proyecto
const dbPath = path.join(__dirname, '../../database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('error al conectar la base de datos:', err.message);
    } else {
        console.log('conectado a la base de datos correctamete');
    }
});

//creamos la tabla usuarios si no existe
db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT UNIQUE NOT NULL,
        contrasena TEXT NOT NULL
    )
`, (err) => {
    if (err) {
        console.error('no se pudo crear la tabla:', err.message);
    }
});

module.exports = db;