const express = require('express');
const router = express.Router();

const userController = require ('../controllers/userController');

const guestMiddleware = require ('../middlewares/guestMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');


// Registro de usuario
    //Form registro
router.get ('/register',guestMiddleware,userController.register);
    //Procesar registro
router.post('/register', userController.processRegister);

// --------------------------------------------- //

// Logeo de usuario
    // Form Login
router.get ('/login',guestMiddleware,userController.login);
    //Procesar login
router.post('/login', userController.processLogin);
    //Procesar logout
router.get ('/logout',userController.logout);

// --------------------------------------------- //

// lista de usuarios
/* router.get('/listUsers', authMiddleware, userController.listUsers); */



module.exports = router;