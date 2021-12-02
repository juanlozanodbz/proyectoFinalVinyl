const express = require('express')
const router = express.Router()
const csController = require('../controllers/song')

router.post('/addSong',csController.postAddSong)

router.get('/getSong',csController.getGetSong)

router.post('/deleteSong', csController.postDeleteSong)

router.post('/updateSong', csController.postUpdateSong)

module.exports = router