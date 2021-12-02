const Sequelize = require("sequelize")
const sequelize = require("../utils/database")
const SongAlbum = (sequelize)=>{
    sequelize.define('songAlbum',{
        idCV:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        launch: Sequelize.STRING
    })
}

module.exports = SongAlbum