function applyRelationships(sequelize) {
    //Print models adhered to connection object
    console.log(sequelize.models)
    
    const Song = sequelize.models.song
    const Album = sequelize.models.album
    const SongAlbum = sequelize.models.songAlbum
    
    Album.belongsToMany(Song, {through:SongAlbum})
}

module.exports = {applyRelationships}