const path = require('path')
const Song = require('../utils/database').models.song

exports.postAddSong = (req, res)=>{
    console.log(req.body)
    Song.create(req.body)
    .then(result=>{
        console.log("Song created successfully")
        res.json({state:"accepted"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({state:"error"})
    }) 
}

exports.getGetSong = (req, res)=>{
    Song.findAll()
        .then(vjs =>{
            console.log(vjs)
            res.json(vjs)
        })

        .catch(err =>{
            console.log(err)
            res.json({state:"error"})
        })
}

exports.postDeleteSong = (req, res)=>{
    console.log(req.body)
    Album.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Song Deleted")
        res.json({state:"accepted"})
    })
    .catch(err =>{
        console.log(err)
        res.json({state:"error"})
    })
}

exports.postUpdateSong = (req, res)=>{
    console.log(req.body)
    Videojuego.update({
        nombre: req.body.nombre
    },{
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Album Updated")
        res.json({state:"accepted"})
    })
    .catch(err =>{
        console.log(err)
        res.json({state:"error"})
    })
}