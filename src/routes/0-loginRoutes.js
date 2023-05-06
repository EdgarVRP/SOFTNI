const express = require('express');
const router = express.Router();
const passport = require('passport');

//PANTALLA home index
router.get('/', (req, res,next) => {
    res.sendFile('index.html', { root: './src/views' });
});
//PANTALLA 0 LOGIN
router.get('/login', (req, res,next) => {
    res.render('0-P-Login');
});
//Cerrar sesion
router.get('/logout',isAuth, (req, res,next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
      });
});
//Middleware
function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}
//Se LOGUEA EL USUARIO
router.post('/', passport.authenticate('local-signin', {
    successRedirect: '/analisis', //se coloca donde se quiere redireccionar
    failureRedirect: '/login',
    passReqToCallback: true
}));

//PANTALLA 1 Analisis de credito
router.get('/analisis',isAuth, (req, res,next) => {
    res.sendFile('1-P-Analisis.html', { root: './src/views' });
});

//PANTALLA 2-P Solicitud de credito
router.get('/solicitud', (req, res,next) => {
    res.sendFile('2-P-Solicitud.html', { root: './src/views' });
});

//PANTALLA 3-P Alta de credito
router.get('/Alta',isAuth, (req, res,next) => {
    res.sendFile('3-P-Alta.html', { root: './src/views' });
});
//PANTALLA 4-P Indicadores
router.get('/indicadores',isAuth, (req, res,next) => {
    res.sendFile('4-P-Indicadores.html', { root: './src/views' });
});

//PANTALLA 5-P-1 ADMIN USUARIO ADMINISTRADOR USUARIO
const usuarioController = require('../controllers/1-userController')
//Mostrar todos los usuarios (GET)
router.get('/usuarios',isAuth, usuarioController.mostrar)
//Crear usuarios (POST)
router.post('/usuarios/crear',isAuth, usuarioController.crear)
//Editar usuarios (POST)
router.put('/usuarios/editar',isAuth, usuarioController.editar)
//Borrar usuarios (GET)
router.delete('/usuarios/borrar/',isAuth, usuarioController.borrar)

//PANTALLA 5-P-2 ADMINISTRADOR Prestatarios
router.get('/prestatarios',isAuth, (req, res,next) => {
    res.sendFile('5-P-2-AdminPrestatarios.html', { root: './src/views' });
});
//PANTALLA 5-P-3 ADMINISTRADOR Proyectos
router.get('/proyectos',isAuth, (req, res,next) => {
    res.sendFile('5-P-3-AdminProyectos.html', { root: './src/views' });
});

//PANTALLA 6-P Indicadores
router.get('/contacto', (req, res,next) => {
    res.sendFile('6-P-ContactUs.html', { root: './src/views' });
});

//PANTALLA 7-P Seguimiento
router.get('/Seguimiento',isAuth, (req, res,next) => {
    res.sendFile('7-P-Seguimiento.html', { root: './src/views' });
});

module.exports = router;