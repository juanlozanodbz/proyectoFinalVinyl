//Importar mysql2
const mysql=require('mysql2')

const configuracion = {
    host: '54.242.195.178',  //<----IP
    port: 3306,
    user:'userX', // mysql -u root
    password:'root'  //<-nombre de la base de datos
}

const conexion = mysql.createConnection(configuracion);
//SHOW DATABASES
conexion.execute('SHOW DATABASES',(error, resultado,campos)=>{
    console.log('Conexion exitosa')
    console.log(error)
    console.log(resultado)
})