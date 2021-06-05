module.exports = (sequelize, dataTypes)=>{
    let alias = 'User';
    let cols = {
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

        createdAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
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
    const User = sequelize.define(alias, cols, config);
    return User;
} 