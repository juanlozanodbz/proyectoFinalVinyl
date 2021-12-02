const express = require('express')
const router = express.Router()
const saController = require('../controllers/songAlbums')

router.post('/addSongAlbum',saController.postAddSongAlbum)

router.get('/getSongAlbum',saController.getGetSongAlbum)

router.post('/deleteSongAlbum', saController.postDeleteSongAlbum)

router.post('/updateSongAlbum', saController.postUpdateSongAlbum)

module.exports = router