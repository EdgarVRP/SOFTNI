const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users=require('../models/0-loginModel');

//serializando y deserializando el usuario
passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser(async (id,done)=>{
    const user=await users.findById(id);
    done(null,user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true //permite pasar el req al callback
}, async (req, username, password, done) => {
    //Haciendo validacion
    const user= await users.findOne({'username': username})
    console.log(user)
    if(user){
        return done(null,false,req.flash('signupMessage','El correo ya esta en uso'));
    }else{
    const newuser=new users();
    newuser.username=username;
    newuser.password=newuser.encryptPassword(password); //Para encriptar las contraseñas
    await newuser.save();
    done(null,newuser);
    }
}
));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true //permite pasar el req al callback
}, async (req, username, password, done) => {
    //Haciendo validacion
    const user= await users.findOne({'username': username})
    if (!user) {
        return done(null, false, req.flash('signinMessage', 'Usuario NO encontrado'));
    }
    if (!user.matchPassword(password)) {
        return done(null, false, req.flash('signinMessage', 'Contraseña incorrecta'));
    }
    done(null, user);
}
));