module.exports = (sequelize, dataTypes)=>{
    let alias = 'movies';
    let columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:  true,
            autoIncrement: true,
        },

        created_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true
        },

        title: { 
            type: dataTypes.STRING,
            allowNull: false
        },

        rating: {
            type: dataTypes.DECIMAL (10,2),
            allowNull: false
        },

        awards: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },

        length: {
            type: dataTypes.INTEGER,
            allowNull: true
        },

        genre_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },

        // agregar todo lo que aparece en la TAbla. 

    };
    let config = {
        tableName : 'movies',
        timestamps : true
    };
// Relacion de tablas 
    const Movie = sequelize.define(alias, columns, config);

    Movie.associate = function(models) {
        Movie.belongsTo(models.Genres, {
            as: "genres",
            foreignKey : "id"
        }); // de 1 a muchos

        Movie.hasMany(models.Actors, {
            as: "actors",
            foreignKey : "id"
        }) // de muchos a 1




    }
    return Movie;
}