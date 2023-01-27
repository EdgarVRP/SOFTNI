const Prestatario= require('../models/2-prestatarioModel');
//Mostrar
module.exports.mostrar = (req, res)=>{
    Prestatario.find({}, (error, prestatarios)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los prestatarios'+error
            })
        }
        //console.log(usuarios.length)
        return res.render('0-2-AdminPrestatario', 
        {total: prestatarios.length+1,
             prestatarios: prestatarios,
              lastid: 1+prestatarios[prestatarios.length-1].idPrestatario})
    })
}

//Crear prestatario
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const prestatario = new Prestatario({
        _id: req.body._id,
        idUsuario: req.body.idUsuario,
        idPrestatario: req.body.idPrestatario,
        prestatarioName : req.body.prestatarioName,
        rfc : req.body.rfc,
        codigoPostal : req.body.codigoPostal,
        ciudad : req.body.ciudad,
        direccion : req.body.direccion,
        cruzamientos : req.body.cruzamientos,
        telefono : req.body.telefono,
        email : req.body.email,
        numContrato: req.body.numContrato,
        fechaContratoPrestatario: req.body.fechaContratoPrestatario,
        rutaContratoPrestatario: req.body.rutaContratoPrestatario,
        rutaIdentificacion: req.body.rutaIdentificacion,
        rutaComprobanteDomicilio: req.body.rutaComprobanteDomicilio,
        lineaCredito: req.body.lineaCredito,
        calificacionCredito: req.body.calificacionCredito
    })
    prestatario.save(function(error,prestatario){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el Prestatario: '+error
            })
        }
        res.redirect('/adminPrestatario')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id= req.body.id_editar
    const idUsuario= req.body.idUsuario_editar
    const idPrestatario= req.body.idPrestatario_editar
    const prestatarioName = req.body.prestatarioName_editar
    const rfc = req.body.rfc_editar
    const codigoPostal = req.body.codigoPostal_editar
    const ciudad = req.body.ciudad_editar
    const direccion = req.body.direccion_editar
    const cruzamientos = req.body.cruzamientos_editar
    const telefono = req.body.telefono_editar
    const email = req.body.email_editar
    const numContrato= req.body.numContrato_editar
    const fechaContratoPrestatario= req.body.fechaContratoPrestatario_editar
    const rutaContratoPrestatario= req.body.rutaContratoPrestatario_editar
    const rutaIdentificacion= req.body.rutaIdentificacion_editar
    const rutaComprobanteDomicilio= req.body.rutaComprobanteDomicilio_editar
    const lineaCredito= req.body.lineaCredito_editar
    const calificacionCredito= req.body.calificacionCredito_editar
    Prestatario.findByIdAndUpdate(id, {idUsuario, idPrestatario, prestatarioName,rfc,codigoPostal,ciudad,direccion,cruzamientos,telefono,email,numContrato,fechaContratoPrestatario,rutaContratoPrestatario,rutaIdentificacion,rutaComprobanteDomicilio,lineaCredito,calificacionCredito }, (error, prestatario)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el prestatario',error
            })
        }
        res.redirect('/adminPrestatario')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Prestatario.findByIdAndRemove(id, (error, prestatario)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Prestatario'
            })
        }
        res.redirect('/adminPrestatario')
    })
}