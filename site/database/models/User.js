/* module.exports = (sequelize, dataTypes)=>{
    let alias = 'User';
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
    return User;
} */