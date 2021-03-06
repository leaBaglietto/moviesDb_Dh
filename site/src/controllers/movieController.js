// llamo a mi base de datos
const db = require("../../database/models");

const controller = {
    index: (req, res) => {
        db.Movie.findAll()
            .then(function (movies) {
                return res.render("index", { movies: movies });
            })
    },
    // Detalle de la Película
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id,  {
                include: [{association: "genre"}, {association: "actors"}]
            })
            .then(function (movie) {
              res.render("detailMovie", { movie:movie });
            })
    },

    //Mostrar los generos de las películas
    movieCreate: (req, res) => {
        db.Genre.findAll()  // Genre es el alias del nombre que le pusimos al modelo de Generos.
            .then(function (genres) {
                return res.render("movieCreate", { genres: genres });
            })
    },
    //Guardar los datos que mande del form Create
    store: (req, res) => {
        db.Movie.create({
            title: req.body.title,
            awards: req.body.awards,
            release_date: req.body.release_date,
            genre_id: req.body.genre_id,
            length: req.body.length,
            rating: req.body.rating,
        });

        res.redirect('/');

    },

    // Modificación de la Película
    edit: (req, res) => {
        let pedidoMovie = db.Movie.findByPk(req.params.id);
        let pedidoGenre = db.Genre.findAll();

        Promise.all([pedidoMovie, pedidoGenre])
            .then(function ([movies, genres]) {
                res.render("movieEdit", { movies: movies, genres: genres });
            })
    },

    update: (req, res) => {
        db.Movie.update({
            title: req.body.title,
            awards: req.body.awards,
            release_date: req.body.release_date,
            genre_id: req.body.genre_id,
            length: req.body.length,
            rating: req.body.rating,
        }, {
            where: {
                id: req.params.id
            }
        });
res.redirect("/movies/" + req.params.id);
    },

    // Eliminar pelicula
    delete: (req, res) => {
        const id = Number(req.params.id)
        db.Movie.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect("/");
        })
        .catch(error => console.log(error))
/* .then( db.Movie.findAll()
            .then(function (movies) {
                return res.render("index", { movies: movies });
            })
        ) */
/*         res.redirect("/"); */
    },


};




module.exports = controller;