module.exports = (sequelize, dataTypes)=>{
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:  true,
            autoIncrement: true,
        },

        createdAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true
        },

        name: {
            type: dataTypes.STRING,
            allowNull: false
        },

        ranking: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
    };
    let config = {
        tableName : 'genres',
        timestamps : true
    };
// Relacion de tablas 
    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(models) {

        Genre.hasMany(models.Movie, {
            as: "movies",
            foreignKey : "genre_id"
        });  

/*         Genre.hasMany(models.Actors, {
            as: "actors",
            foreignKey : "id"
        })  */  

    }
    return Genre;
}