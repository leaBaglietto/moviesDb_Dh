const db = require("../../database/models"); 
const bcryptjs = require('bcryptjs');

const controller = {
    // Registro de Usuario
    register: (req,res) => {
        res.render('register');
        },
        processRegister: (req,res) => {
            db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
    
            res.redirect('home');
        },
// -----------------------------------------------
        login: (req,res) => {
            res.render('login');
            },
};




module.exports = controller;