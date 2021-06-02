module.exports = (sequelize, dataTypes)=>{
    let alias = 'actors';
    let columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:  true,
            autoIncrement: true,
        },

        name: { 
            type: dataTypes.STRING,
            allowNull: false
        },

        email: {
            type: dataTypes.STRING,
            allowNull: false
        },

        password: {
            type: dataTypes.STRING,
            allowNull: false
        },

        remember_token: {
            type: dataTypes.STRING,
            allowNull: false
        },

        created_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true
        },

        rol: {
            type: dataTypes.BOOLEAN,
            allowNull: true
        },

    };
    let config = {
        tableName : 'users',
        timestamps : true
    };
// Relacion de tablas 
    const User = sequelize.define(alias, columns, config);

    User.associate = function(models) {

        User.belongsTo(models.Movies, {
            as: "movies",
            foreignKey : "id"
        }); // de 1 a muchos

        User.belongsTo(models.Genres, {
            as: "genres",
            foreignKey : "id"
        }); // de 1 a muchos

        User.belongsTo(models.Actors, {
            as: "actors",
            foreignKey : "id"
        }); // de 1 a muchos

    }
    return User;
}