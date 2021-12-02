const express = require("express")
const path = require("path")

const app = express();

app.use(express.static(path.join(__dirname,'public')))

app.get('/frontproyectofinal',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','index.html'))
})

app.listen(8080,()=>{
    console.log("App en linea en el puerto 8080")
})