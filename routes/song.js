const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const csController = require('../controllers/song')

/*Formulario para dar de alta videojuegos
router.get('/agregarVideojuego',vjController.getAgregarVideojuego)*/
//Servicio para procesar los datos del formulario CREATE
router.post('/addSong',csController.postAddSong)

/*Pagina de confirmacion
router.get('/confirmacionDatos',vjController.getConfirmacionDatos)*/

//Consulta de videojuegos READ
router.get('/getSong',csController.getGetSong)

//Delete Videogame DELETE
router.post('/deleteSong', csController.postDeleteSong)

//Update Videogame UPDATE
router.post('/updateSong', csController.postUpdateSong)

module.exports = router