const path = require('path')
const Album = require('../utils/database').models.album

exports.postAddAlbum = (req, res)=>{
    console.log(req.body)
    Album.create(req.body)
    .then(result=>{
        console.log("Album created successfully")
        res.json({state:"accepted"})
    })
    .catch((err)=>{
        console.log(err)
        res.json({state:"error"})
    }) 
}

exports.getGetAlbums = (req, res)=>{
    Album.findAll()
        .then(vjs =>{
            console.log(vjs)
            res.json(vjs)
        })

        .catch(err =>{
            console.log(err)
            res.json({state:"error"})
        })
}

exports.postDeleteAlbum = (req, res)=>{
    console.log(req.body)
    Album.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(()=>{
        console.log("Album Deleted")
        res.json({state:"accepted"})
    })
    .catch(err =>{
        console.log(err)
        res.json({state:"error"})
    })
}

exports.postUpdateAlbum = (req, res)=>{
    console.log(req.body)
    Album.update({
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