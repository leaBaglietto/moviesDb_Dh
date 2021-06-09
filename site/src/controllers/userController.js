const db = require("../../database/models");
const bcryptjs = require('bcryptjs');

const controller = {
 //formulario de registro
    register: (req, res) => {
        res.render('register');
    },
    // Registro de Usuario
    processRegister: (req, res) => {
        console.log (registro)
        db.Users.create({
            name: req.body.fullname,
            email: req.body.email,
            password: req.body.password /* bcryptjs.hashSync(req.body.password, 10) */
        })
            .then(() => res.redirect("/users/login"));
    },

    // -----------------------------------------------
 /*    login: (req, res) => {
        res.render('index');
    }, */
};


module.exports = controller;