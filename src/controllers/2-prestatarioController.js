const Prestatario= require('../models/2-prestatarioModel');
//Mostrar
module.exports.mostrar = (req, res)=>{
    Prestatario.find({}, (error, usuarios)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los prestatarios'+error
            })
        }
        //console.log(usuarios.length)
        return res.render('2-AdminPrestatario', {total: prestatario.length+1, prestatario: prestatarios, lastid: 1+prestatarios[prestatarios.length-1].idPrestatario})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const usuario = new Usuario({
        _id: req.body._id,
        idUsuario: req.body.idUsuario,
        userName : req.body.userName,
        password : "",
        dateTimeLogin : req.body.dateTimeLogin,
        rolUser : req.body.rolUser,
        fechaCreacion : req.body.fechaCreacion,
        email : req.body.email,
        telefono : req.body.telefono
    })
    usuario.password = usuario.encryptPassword(req.body.password)
    usuario.save(function(error,usuario){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el Usuario'+error
            })
        }
        res.redirect('/admin')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    
    const usuario = new Usuario();

    const id = req.body.id_editar
    const idUsuario = req.body.idUsuario_editar
    const userName = req.body.userName_editar
    const password = usuario.encryptPassword(req.body.password_editar)
    const dateTimeLogin = req.body.dateTimeLogin_editar
    const rolUser = req.body.rolUser_editar
    const fechaCreacion = req.body.fechaCreacion_editar
    const email = req.body.email_editar
    const telefono = req.body.Telefono_editar
    Usuario.findByIdAndUpdate(id, {idUsuario, userName, password, dateTimeLogin, rolUser, fechaCreacion, email, telefono}, (error, usuario)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el usuario',error
            })
        }
        res.redirect('/admin')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Usuario.findByIdAndRemove(id, (error, usuario)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Usuario'
            })
        }
        res.redirect('/admin')
    })
}