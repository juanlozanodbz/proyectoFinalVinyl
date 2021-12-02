const Sequelize = require("sequelize")
const sequelize = require("../utils/database")
const Album = (sequelize)=>{
    sequelize.define('album'),{
        id:{
            type:Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type:Sequelize.STRING(30),
            allowNull:false
        },
        artist:{
            type:Sequelize.STRING(30),
            allowNull:false
        },
        genre:{
            type:Sequelize.STRING(30),
            allowNull:false
        },
        year:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    }
}

module.exports = Album