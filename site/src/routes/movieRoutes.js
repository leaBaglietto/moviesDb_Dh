const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

//Listado de Pelicualas
router.get('/', movieController.index);

//Crear Películas
router.get("/movieCreate", movieController.movieCreate);
router.post("/movieCreate", movieController.store);

// Detalle de Película
router.get('/:id', movieController.detail);

// Modificación de Película
router.get("/movieEdit/:id", movieController.edit);
router.put("/movieEdit/:id", movieController.update);

// Eliminar Película
router.delete("/movieDelete/:id", movieController.delete);





module.exports = router;