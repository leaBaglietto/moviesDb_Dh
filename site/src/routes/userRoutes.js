const express = require('express');
const router = express.Router();

const userController = require ('../controllers/userController');

// Registro de usuario
router.get ('/register',userController.register);
router.post('/register', userController.processRegister);

// Logeo de usuario
router.get ('/login',userController.login);



module.exports = router;