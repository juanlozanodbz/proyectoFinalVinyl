const Sequelize = require("sequelize")

const Album = (sequelize)=>{
    sequelize.define('album',{
        id:{
            type:Sequelize.INTEGER,
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
            allowNull:true
        }
    })
}

module.exports = Album