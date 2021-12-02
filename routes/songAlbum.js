const express = require('express')
const router = express.Router()
const cvController = require('../controllers/songAlbum')

router.post('/addSongAlbum',cvController.postAddSongAlbum)

router.get('/getSongAlbum',cvController.getGetSongAlbum)

router.post('/deleteSongAlbum', cvController.postDeleteSongAlbum)

router.post('/updateSongAlbum', cvController.postUpdateSongAlbum)

module.exports = router