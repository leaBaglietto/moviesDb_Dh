const express = require('express');
const router = express.Router();

const movieController = require ('../controllers/movieController');

//Listado de Pelicualas
router.get ('/',movieController.index); 

//Crear Películas
router.get("/movieCreate",movieController.movieCreate);
router.post("/movieCreate",movieController.store);

// Detalle de Película
/* router.get ('/detailMovie',movieController.detailMovie); */
router.get ('/:id',movieController.detailMovie);

// Modificación  de Película
router.get("/movieEdit/:id",movieController.edit);





module.exports = router;