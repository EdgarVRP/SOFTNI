const mongoose = require('mongoose');
require("dotenv").config();
const uri=process.env.MONGODB_URI_SOFOM;
mongoose.connect(uri, {useNewUrlParser: true , useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback() {
    console.log("¡Conectado a MongoDB!")
})
module.exports = db