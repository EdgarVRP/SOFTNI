const express = require('express')
const router = express.Router()

const usuarioController = require('../controllers/1-userController')

//Mostrar todos los usuarios (GET)
router.get('/admin/', usuarioController.mostrar)
//Crear usuarios (POST)
router.post('/admin/crear', usuarioController.crear)
//Editar usuarios (POST)
router.post('/admin/editar', usuarioController.editar)
//Borrar usuarios (GET)
router.get('/admin/borrar/:id', usuarioController.borrar)
module.exports = router