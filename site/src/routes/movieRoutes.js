const express = require('express');
const router = express.Router();

const movieController = require ('../controllers/movieController');

router.get ('/',movieController.index);
router.get ('/detailMovie',movieController.detailMovie);
router.get ('/register',movieController.register);
router.get ('/login',movieController.login);

//Crear Películas
router.get("/movie/create",movieController.movieCreate);


module.exports = router;