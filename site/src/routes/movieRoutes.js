const express = require('express');
const router = express.Router();

const movieController = require ('../controllers/movieController');

router.get ('/',movieController.index); 

//Crear Películas
router.get("/movieCreate",movieController.movieCreate);

router.get ('/detailMovie',movieController.detailMovie);






module.exports = router;