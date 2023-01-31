const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const prestatarioSchema = new Schema(
  {
    idUsuario: {type: Number, required: true},
    idPrestatario: {type: Number, required: true},
    prestatarioName : {type: String, required: true},
    rfc : {type: String, required: true},
    codigoPostal : {type: Number, required: true},
    ciudad : {type: String, required: true},
    direccion : {type: String, required: true},
    cruzamientos : {type: String, required: true},
    telefono : {type: Number, required: true},
    email : {type: String, required: true},
    numContrato: {type: Number},
    fechaContratoPrestatario: {type: String},
    rutaContratoPrestatario: {type: String},
    rutaIdentificacion: {type: String},
    rutaComprobanteDomicilio: {type: String},
    lineaCredito: {type: Number},
    calificacionCredito: {type: String},
  },
  { versionKey: false }
);

module.exports = mongoose.model("prestatarios", prestatarioSchema);