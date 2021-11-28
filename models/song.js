const Sequelize = require("sequelize")
const Album = require("./album")

const Song = (sequelize)=>{
    sequelize.define('song',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type:Sequelize.STRING(30),
            allowNull:false
        }
    })
}

Song.BelongsTo(Album);

module.exports = Song