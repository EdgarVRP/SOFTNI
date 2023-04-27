const express = require('express');
const router = express.Router();
const passport = require('passport');
//PANTALLA 2 LOGIN
router.get('/login', (req, res,next) => {
    res.sendFile('0-P-Login.html', { root: './src/views' });
});
//Se LOGUEA EL USUARIO
router.post('/', passport.authenticate('local-signin', {
    successRedirect: '/home', //se coloca donde se quiere redireccionar
    failureRedirect: '/login',
    passReqToCallback: true
}));
//PANTALLA 2-1 Solicitud de credito
router.get('/', (req, res,next) => {
    res.sendFile('2-P-Solicitud.html', { root: './src/views' });
});

//PANTALLA 3 Alta en sistema y formalizacion
router.get('/altaSistema',isAuth, (req, res,next) => {
    res.render('3-altaView');
});
//PANTALLA 4 Seguimiento de credito
router.get('/home',isAuth, (req, res,next) => {
    res.render('4-seguimientoView');
});
//PANTALLA 4-1 Proveedores
router.get('/proveedores',isAuth, (req, res,next) => {
    res.render('4-1-proveedoresView');
});
//PANTALLA 5 Control
router.get('/control',isAuth, (req, res,next) => {
    res.render('5-controlView');
});
//PANTALLA 6 Documentos
router.get('/documentos',isAuth, (req, res,next) => {
    res.render('6-documentosView');
});
//PANTALLA 7 Indicadores
router.get('/indicadores',isAuth, (req, res,next) => {
    res.render('7-indicadoresView');
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
//PANTALLA 0-1 ADMIN USUARIO ADMINISTRADOR USUARIO
const usuarioController = require('../controllers/1-userController')
//Mostrar todos los usuarios (GET)
router.get('/admin/',isAuth, usuarioController.mostrar)
//Crear usuarios (POST)
router.post('/admin/crear',isAuth, usuarioController.crear)
//Editar usuarios (POST)
router.post('/admin/editar',isAuth, usuarioController.editar)
//Borrar usuarios (GET)
router.get('/admin/borrar/:id',isAuth, usuarioController.borrar)

//PANTALLA 2-1-1 Datos recibidos
/*
router.get('/registro', (req, res,next) => {
    res.render('2-1-1-datosRecibidos');
});
*/
router.get('/adminPrestatario',isAuth, (req, res,next) => {
    res.render('0-2-AdminPrestatario');
});
module.exports = router;