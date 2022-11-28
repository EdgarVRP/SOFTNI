const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Se invoca la conexion a la base de datos
const conexion=require('./db/db');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//Se añade rutas
const usuarios=require('./routes/UserRoutes');
app.use(usuarios);
/*
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});
*/
app.use((req, res, next) => {
    res.status(404).send('Error: 404 - Not Found');
});
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});