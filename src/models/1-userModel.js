const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const alumnoSchema = new Schema(
  {
    idUsuario: {type: Number, required: true},
    userName : {type: String, required: true},
    password : {type: String, required: true},
    dateTimeLogin : String,
    rolUser : {type: String, required: true},
    fechaCreacion : String,
    email : {type: String, required: true},
    telefono : {type: Number, required: true}
  },
  { versionKey: false }
);
module.exports = mongoose.model("usuarios", alumnoSchema);