// llamo a mi base de datos
const db = require("../../database/models"); 
const controller = {
    index: (req,res) => {
        db.Movie.findAll()  
        .then(function(movies){
            return res.render("index", {movies:movies});
        })
    },

    detailMovie: (req,res) => {
        res.render('detailmovie');
        },
        
//Mostrar los generos de las películas
    movieCreate: (req, res) => {
        db.Genre.findAll()  // Genre es el alias del nombre que le pusimos al modelo de Generos.
        .then(function(genres){
            return res.render("movieCreate", {genres:genres});
        })
    },
  
};




module.exports = controller;