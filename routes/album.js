const express = require('express')
const router = express.Router()
const csController = require('../controllers/album')

router.post('/addAlbum',csController.postAddAlbum)

router.get('/getAlbum',csController.getGetAlbums)

router.post('/deleteAlbum', csController.postDeleteAlbum)

router.post('/updateALbum', csController.postUpdateAlbum)

module.exports = router