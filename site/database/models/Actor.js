module.exports = (sequelize, dataTypes)=>{
    let alias = 'actors';
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

        first_name: { 
            type: dataTypes.STRING,
            allowNull: false
        },

        last_name: { 
            type: dataTypes.STRING,
            allowNull: false
        },

        rating: {
            type: dataTypes.DECIMAL (1,1),
            allowNull: false
        },

        favorite_movie_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },

        // agregar todo lo que aparece en la TAbla. 

    };
    let config = {
        tableName : 'actors',
        timestamps : true
    };
// Relacion de tablas 
    const Actor = sequelize.define(alias, columns, config);

    Actor.associate = function(models) {
/*         Actor.belongsTo(models.Genres, {
            as: "genres",
            foreignKey : "id"
        }); */ // de 1 a muchos

        Actor.belongsTo(models.Movies, {
            as: "movies",
            foreignKey : "id"
        }); // de 1 a muchos

        Actor.hasMany(models.Movies, {
            as: "movies",
            foreignKey : "id"
        }) // de muchos a 1

    }
    return Actor;
}