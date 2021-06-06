// llamo a mi base de datos
const db = require("../../database/models"); 
const controller = {
    index: (req,res) => {
        db.Movie.findAll()  
        .then(function(movies){
            return res.render("index", {movies:movies});
        })
    },
// Detalle de la Película
        detailMovie: (req,res) => {
            db.movie.finByPk(req.params.id, {
                include: [{association: "genre"}, {association: "actors"}]
            })
            .then (function(movies){
                res.render("detailMovie", {movie:movie});
            })
        },

// Modificación de la Película
        edit: (req,res) => {
            let pedidoMovie = db.movie.findByPk(req.params.id);
            let pedidoGenre = db.genre.findByAll();

            Promise.all([pedidoMovie, pedidoGenre])
            .then (function ([movies,genres]) {
                res.render("movieEdit", {movies:movies, genres:genres});
            })
        },

/*     detailMovie: (req,res) => {
        res.render('detailmovie');
        }, */

//Mostrar los generos de las películas
    movieCreate: (req, res) => {
        db.Genre.findAll()  // Genre es el alias del nombre que le pusimos al modelo de Generos.
        .then(function(genres){
            return res.render("movieCreate", {genres:genres});
        })
    },
//Guardar los datos que mande del form Create
    store: (req, res) => {
        db.movie.create({
            title: req.body.title,
            awards: req.body.awards,
            release_date: req.body.release_date,
            genre_id: req.body.genre_id,
            length: req.body.length,
            rating: req.body.rating,
        })
        .then(()=>{
            res.redirect('/');
        })
    },
  
};




module.exports = controller;