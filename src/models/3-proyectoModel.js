const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const proyectoSchema = new Schema(
  {
    idUsuario: {type: Number, required: true},
    idPrestatario: {type: Number, required: true},
    prestatarioName : {type: String, required: true},
    rfc : {type: String, required: true},
    codigoPostal : {type: Number, required: true},
    direccion : {type: String, required: true},
    cruzamientos : {type: String, required: true},
    telefono : {type: Number, required: true},
    email : {type: String, required: true},
    numContrato: {type: Number, required: true},
    fechaContratoPrestatario: {type: Date, required: true},
    rutaContratoPrestatario: {type: String, required: true},
    rutaIdentificacion: {type: String, required: true},
    rutaComprobanteDomicilio: {type: String, required: true},
    lineaCredito: {type: Number, required: true},
    calificacionCredito: {type: String, required: true},
  },
  { versionKey: false }
);

module.exports = mongoose.model("prestatarios", prestatarioSchema);