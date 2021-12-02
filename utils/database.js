const {applyRelationships} = require('./relations')

//Represents Sequelize library
const Sequelize = require("sequelize")
//Connection Object
const sequelize= new Sequelize('DB8','user4','root',{
    dialect: 'mysql',
    host: '54.227.9.233', //IP address
    define:{
        //Don't place createdAt and updateAt
        timestamps:false,
        //Avoid pluralism
        freezeTableName: true
    }
})

//Load models
const modelDefiners = [
    //Import each model inside models folder
    require('../models/album'),
    require('../models/song'),
    require('../models/songAlbum')
]

//Adhere to connection object
for(const modelDefiner of modelDefiners) {
    modelDefiner(sequelize)
}

//Make relationships between DB tables
applyRelationships(sequelize)

//Para poder usar en archivo externos la conexion
module.exports = sequelize;


