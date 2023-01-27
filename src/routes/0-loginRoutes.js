const express = require('express');
const router = express.Router();
const passport = require('passport');
//PANTALLA 2 LOGIN
router.get('/login', (req, res,next) => {
    res.render('2-loginView');
});
//Se LOGUEA EL USUARIO
router.post('/', passport.authenticate('local-signin', {
    successRedirect: '/home', //se coloca donde se quiere redireccionar
    failureRedirect: '/login',
    passReqToCallback: true
}));
//PANTALLA 2-1 Solicitud de credito
router.get('/', (req, res,next) => {
    res.render('2-1-singupView');
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
//Pantalla 0-2 admin prestatario
//Se importa controlador de prestatario
const prestatarioController = require('../controllers/2-prestatarioController')
//Mostrar todos los usuarios (GET)
router.get('/adminPrestatario/', prestatarioController.mostrar)
//Crear usuarios (POST)
router.post('/adminPrestatario/crear', prestatarioController.crear)
//Editar usuarios (POST)
router.post('/adminPrestatario/editar', prestatarioController.editar)
//Borrar usuarios (GET)
router.get('/adminPrestatario/borrar/:id', prestatarioController.borrar)

//Pantalla 0-3 adminProyecto
//Se importa controlador de Proyecto
const proyectoController = require('../controllers/2-prestatarioController')
//Mostrar todos los usuarios (GET)
router.get('/adminProyecto/', proyectoController.mostrar)
//Crear usuarios (POST)
router.post('/adminProyecto/crear', proyectoController.crear)
//Editar usuarios (POST)
router.post('/adminProyecto/editar', proyectoController.editar)
//Borrar usuarios (GET)
router.get('/adminProyecto/borrar/:id', proyectoController.borrar)

//Pantalla 0-4 adminControl
//Se importa controlador de Control Técnico
const ControlController = require('../controllers/2-prestatarioController')
//Mostrar todos los usuarios (GET)
router.get('/adminControl/', ControlController.mostrar)
//Crear usuarios (POST)
router.post('/adminControl/crear', ControlController.crear)
//Editar usuarios (POST)
router.post('/adminControl/editar', ControlController.editar)
//Borrar usuarios (GET)
router.get('/adminControl/borrar/:id', ControlController.borrar)

//Pantalla 0-5 adminProveedores
//Se importa controlador de Proveedores
const ProveedoresController = require('../controllers/2-prestatarioController')
//Mostrar todos los usuarios (GET)
router.get('/adminProveedores/', ProveedoresController.mostrar)
//Crear usuarios (POST)
router.post('/adminProveedores/crear', ProveedoresController.crear)
//Editar usuarios (POST)
router.post('/adminProveedores/editar', ProveedoresController.editar)
//Borrar usuarios (GET)
router.get('/adminProveedores/borrar/:id', ProveedoresController.borrar)

//Pantalla 0-6 adminFacturas
//Se importa controlador de Facturas
const FacturasController = require('../controllers/2-prestatarioController')
//Mostrar todos los usuarios (GET)
router.get('/adminFacturas/', FacturasController.mostrar)
//Crear usuarios (POST)
router.post('/adminFacturas/crear', FacturasController.crear)
//Editar usuarios (POST)
router.post('/adminFacturas/editar', FacturasController.editar)
//Borrar usuarios (GET)
router.get('/adminFacturas/borrar/:id', FacturasController.borrar)






module.exports = router;