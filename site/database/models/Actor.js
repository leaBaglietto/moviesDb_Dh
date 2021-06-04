module.exports = (sequelize, dataTypes)=>{
    let alias = 'Actor';
    let cols = {
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
            type: dataTypes.DOUBLE,
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
    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models) {

        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: "actor_movie",
            foreignKey : "actor_id",
            otherKey: "movie_id",
            timestamps: true // la tabla intermedia tiene timestamps
        }); // de Muchos a muchos
        
        /*         Actor.belongsTo(models.Genres, {
            as: "genres",
            foreignKey : "id"
        }); */ // de 1 a muchos

        /* Actor.belongsTo(models.Movies, {
            as: "movies",
            foreignKey : "id"
        }); // de 1 a muchos

        Actor.hasMany(models.Movies, {
            as: "movies",
            foreignKey : "id"
        }) // de muchos a 1
 */
    }
    return Actor;
}