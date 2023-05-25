const express=require('express');
const path=require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
//se importa ejs
const ejs=require('ejs');
//inicializaciones
const app=express();
const port = process.env.PORT || 3000;
//Se invoca conexion a la base de datos
require('./db/1-userDB.js');//conexion CRUD USUARIOS
require('./passport/local-auth');
//indicando la ruta de las vistas
app.set('views',path.join(__dirname,'views'));
//middlewares
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//Configurando sesion
app.use(session({
    secret:process.env.SECRET, //USAR VARIABLE DE ENTORNO
    resave:false,
    saveUninitialized:false
}))
app.use(flash()); //debe ir despues de session y antes de passport
app.use((express.static(__dirname + '/views')));
app.use(passport.initialize());
app.use(passport.session());
//Haciendo disponible el mensaje de flash
app.use((req,res,next)=>{
    app.locals.signupMessage=req.flash('signupMessage');//signupMessage:nombre de la variable
    app.locals.signinMessage=req.flash('signinMessage');
    next();
})
//requerimos las rutas
app.use('/',require('./routes/0-loginRoutes')); //Ruta login
app.use((req, res, next) => {
    res.status(404).send('Error: 404 - Not Found');
});
//starting the server
app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
}
);