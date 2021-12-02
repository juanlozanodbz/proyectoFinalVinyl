const Sequelize = require("sequelize")
const sequelize = require("../utils/database")
const Song = (sequelize)=>{
    sequelize.define('song'),{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type:Sequelize.STRING(30),
            allowNull:false
        }
    }
}

module.exports = Song