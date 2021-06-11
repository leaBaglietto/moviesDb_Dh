const express = require('express');
const router = express.Router();

const userController = require ('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');


// Registro de usuario
    //Form registro
router.get ('/register',userController.register);
    //Procesar registro
router.post('/register', userController.processRegister);

// --------------------------------------------- //

// Logeo de usuario
    // Form Login
router.get ('/login',userController.login);
    //Procesar login
router.post('/login', userController.processLogin);
    //Procesar logout
router.get ('/logout',userController.logout);

// --------------------------------------------- //

// lista de usuarios
/* router.get('/listUsers', authMiddleware, userController.listUsers); */



module.exports = router;