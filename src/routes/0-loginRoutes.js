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
router.get('/Alta', (req, res,next) => {
    res.sendFile('3-P-Alta.html', { root: './src/views' });
});

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


module.exports = router;