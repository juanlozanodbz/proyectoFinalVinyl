function applyRelationships(sequelize) {
    //Print models adhered to connection object
    console.log(sequelize.models)
    const Song = sequelize.models.song
    const Album = sequelize.models.console
    const SongAlbum = sequelize.models.songAlbum

    Album.hasMany(Song, {through:SongAlbum})
    Song.belongsToOne(Album, {through:SongAlbum})
}

module.exports = {applyRelationships}