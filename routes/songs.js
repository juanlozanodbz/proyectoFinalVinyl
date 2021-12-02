const express = require('express')
const router = express.Router()
const sController = require('../controllers/songs')

router.post('/addSong',sController.postAddSong)

router.get('/getSong',sController.getGetSong)

router.post('/deleteSong', sController.postDeleteSong)

router.post('/updateSong', sController.postUpdateSong)

module.exports = router