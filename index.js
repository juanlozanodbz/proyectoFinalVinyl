const express = require("express")

const app = express()

const sRoutes = require('./routes/songs')
const aRoutes = require('./routes/albums')
const saRoutes = require('./routes/songAlbums')

const sequelize = require('./utils/database')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/songs",sRoutes);
app.use("/albums",aRoutes);
app.use("/songAlbums",saRoutes);

sequelize.sync()
    .then(()=>{
        app.listen(8080,()=>{
            console.log("Aplicación web en línea en el puerto 8080")
        })
    })
    .catch(err=>console.log(err))