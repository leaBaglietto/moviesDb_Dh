module.exports = (sequelize, dataTypes)=>{
    let alias = 'Actor';
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
    }
    return Actor;
}