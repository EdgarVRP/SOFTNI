const express = require('express');
const router = express.Router();
const passport = require('passport');
//PANTALLA LOGIN
router.get('/login', (req, res,next) => {
    res.render('2-loginView');
});
//Se LOGUEA EL USUARIO
router.post('/', passport.authenticate('local-signin', {
    successRedirect: '/home', //se coloca donde se quiere redireccionar
    failureRedirect: '/login',
    passReqToCallback: true
}));
//PANTALLA Solicitud de credito
router.get('/', (req, res,next) => {
    res.render('2-1-singupView');
});
//PANTALLA HOME
router.get('/home', (req, res,next) => {
    res.render('4-seguimientoView');
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
//ADMIN USUARIO ADMINISTRADOR USUARIO
const usuarioController = require('../controllers/1-userController')
//Mostrar todos los usuarios (GET)
router.get('/admin/',isAuth, usuarioController.mostrar)
//Crear usuarios (POST)
router.post('/admin/crear',isAuth, usuarioController.crear)
//Editar usuarios (POST)
router.post('/admin/editar',isAuth, usuarioController.editar)
//Borrar usuarios (GET)
router.get('/admin/borrar/:id',isAuth, usuarioController.borrar)

module.exports = router;