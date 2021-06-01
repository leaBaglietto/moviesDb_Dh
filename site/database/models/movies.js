module.exports = (sequelize, dataTypes)=>{
    let alias = 'movies';
    let columns = {
        id_movie: {
            type: dataTypes.INTEGER,
            primaryKey:  true,
            autoIncrement: true,
            // allowNull: false
        },
        movie_title: { 
            type: dataTypes.STRING,
            allowNull: false
        },
        description: { 
            type: dataTypes.STRING,
            allowNull: false
        },

        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        image: {
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
        }

    };
    let config = {
        tableName : 'movies',
        timestamps : true
    };

    const Product = sequelize.define(alias, columns, config);

    Product.associate = function(models) {
        //relación uno a muchos, vista desde "uno": un producto pertenece a una categoría
        Product.belongsTo(models.Category, {
            as: "categorias",
            foreignKey : "category_id"
        });

        // relacion muchos a muchos: un producto puede tenerlo varios users
        // user-product es tabla pivot. Tiene su propio indice id
        Product.belongsToMany(models.User, {
            as: "usuarios",
            through: "user_product",
            foreignKey : "user_id",
            otherKey: "movie_id",
            timestamps: false,

        });    

        //relación uno a muchos, vista desde "muchos": un producto puede pertenecer a varios registros user_product
        Product.hasMany(models.User_Product, {
            as: "cartproducts",
            foreignKey : "product_id"
        })




    }
    return Product;
}