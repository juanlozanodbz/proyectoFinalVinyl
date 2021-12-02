const path = require('path')
const SongAlbum = require('../utils/database').models.SongAlbum

exports.postAddSongAlbum = (req, res)=>{
    console.log(req.body)
    SongAlbum.create(req.body)
    //Videojuego(sequelize).create(req.body)
    .then(result=>{
        console.log("Song Album created successfully")
        res.json({state:"accepted"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({state:"error"})
    }) 
}

exports.getGetSongAlbum = (req, res)=>{
    SongAlbum.findAll()
        .then(vjs =>{
            console.log(vjs)
            res.json(vjs)
        })

        .catch(err =>{
            console.log(err)
            res.json({state:"error"})
        })
}

exports.postDeleteSongAlbum = (req, res)=>{
    console.log(req.body)
    SongAlbum.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Song Album Deleted")
        res.json({state:"accepted"})
    })
    .catch(err =>{
        console.log(err)
        res.json({state:"error"})
    })
}

exports.postUpdateSongAlbum = (req, res)=>{
    console.log(req.body)
    SongAlbum.update({
        nombre: req.body.nombre
    },{
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("SongAlbum Updated")
        res.json({state:"accepted"})
    })
    .catch(err =>{
        console.log(err)
        res.json({state:"error"})
    })
}