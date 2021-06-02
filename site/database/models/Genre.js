module.exports = (sequelize, dataTypes)=>{
    let alias = 'genres';
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
    const Genre = sequelize.define(alias, columns, config);

    Genre.associate = function(models) {

        Genre.belongsTo(models.Movies, {
            as: "movies",
            foreignKey : "id"
        });      // de 1 a muchos

/*         Genre.hasMany(models.Actors, {
            as: "actors",
            foreignKey : "id"
        })  */   // de muchos a 1

    }
    return Genre;
}