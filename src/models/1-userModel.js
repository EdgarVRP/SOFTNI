const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const usuarioSchema = new Schema(
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
//Para passport
usuarioSchema.methods.encryptPassword=(password)=>{
  return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
};

usuarioSchema.methods.matchPassword=function(password){
  return bcrypt.compareSync(password,this.password);
};

module.exports = mongoose.model("usuarios", usuarioSchema);