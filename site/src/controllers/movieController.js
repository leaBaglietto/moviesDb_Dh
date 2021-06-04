// llamo a mi base de datos
/*  const db = require("../../database/models");  */

const controller = {
    index: (req,res) => {
    res.render('index');
    },

    detailMovie: (req,res) => {
        res.render('detailmovie');
        },

    register: (req,res) => {
        res.render('register');
        },

        login: (req,res) => {
            res.render('login');
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