const express = require('express')
const router = express.Router()
const aController = require('../controllers/albums')

router.post('/addAlbum',aController.postAddAlbum)

router.get('/getAlbums',aController.getGetAlbums)

router.post('/deleteAlbum', aController.postDeleteAlbum)

router.post('/updateALbum', aController.postUpdateAlbum)

module.exports = router