const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users=require('../models/1-userModel');

//serializando y deserializando el usuario
passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser(async (id,done)=>{
    const user=await users.findById(id);
    done(null,user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true //permite pasar el req al callback
}, async (req, email, password, done) => {
    //Haciendo validacion
    const user= await users.findOne({'email': email})
    console.log(user)
    if(user){
        return done(null,false,req.flash('signupMessage','El correo ya esta en uso'));
    }else{
    const newuser=new users();
    newuser.email=email;
    newuser.password=newuser.encryptPassword(password); //Para encriptar las contraseñas
    newuser.telefono=req.body.telefono;
    await newuser.save();
    done(null,newuser);
    }
}
));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    rolField: 'rol',
    passReqToCallback: true //permite pasar el req al callback
}, async (req, email, password, done) => {
    //Haciendo validacion
    const user= await users.findOne({'email': email})
    //Verificando contenido de req.body
    if (!user) {
        return done(null, false, req.flash('signinMessage', 'Usuario NO encontrado'));
    }
    if (!user.matchPassword(password)) {
        return done(null, false, req.flash('signinMessage', 'Contraseña incorrecta'));
    }

    //Verificando el rol
    try {
        console.log(user.rolUser)    
        if (user.rolUser == 'Administrador TI') {
            return done(null, user, req.flash('signinMessage', 'Bienvenido Administrador'));
        } else if (user.rolUser == 'user') {
            return done(null, user, req.flash('signinMessage', 'Bienvenido Usuario'));
        }
    } catch (error) {
        console.error(error)
    }
    
    done(null, user);
}
));