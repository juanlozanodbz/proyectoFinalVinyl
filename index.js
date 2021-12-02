const express = require("express")

const app = express()

const sRoutes = require('./routes/song')
const aRoutes = require('./routes/album')
const asRoutes = require('./routes/songAlbum')

const sequelize = require('./utils/database')

app.use("/songs",sRoutes);
app.use("/albums",aRoutes);
app.use("/songAlbum",asRoutes);

sequelize.sync()
    .then(()=>{
        app.listen(8080,()=>{
            console.log("Aplicación web en línea en el puerto 8080")
        })
    })
    .catch(err=>console.log(err))