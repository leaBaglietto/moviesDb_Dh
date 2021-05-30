const express = require('express');
const router = express.Router();

const movieController = require ('../controllers/movieController');

router.get ('/',movieController.index);
router.get ('/detailMovie',movieController.detailMovie);


module.exports = router;