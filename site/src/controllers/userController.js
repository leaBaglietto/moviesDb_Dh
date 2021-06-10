const db = require("../../database/models");
const bcryptjs = require('bcryptjs');

const controller = {
    //formulario de registro
    register: (req, res) => {
        res.render('register');
    },
    // Proceso de Registro de Usuario
    processRegister: (req, res) => {
        // Buscamos la existencia del usuario
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(function (user) {
                if (!user) {//Si no esta el usuario lo crea
                    db.Users.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                        remember_token: req.body.password,
                        rol: req.body.rol
                    })
                        .then((function () {
                            req.session.user = req.body.name;
                            req.session.auth = true;
                            req.session.user.rol = req.body.rol;
                            // Chequeo del campo Recordame
                            if (req.body.remember != undefined) {
                                // maxAge en ms
                                res.cookie('remember', user.email, { maxAge: 120000 })
                            }
                            return res.redirect("/");
                        }))
                } else {//de lo contrario si existe el usuario
                    res.render('register');//Retorna a registro con los campos vacios
                }
            })
    },

    // ----------------------------------------------- //
    // PROCESO DE LOGIN 
    login: (req, res) => {
        res.render('login');
    },
    processLogin: (req, res) => {
        db.Users.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(function (user) {
                // si existe el usuario y la contrasenia es correcta
                if (user && user.email == req.body.email) {
                    req.session.user = user.name;
                    if (user.rol == 1) {
                        req.session.auth = true;
                    } else {
                        req.session.auth = false;
                    }
                    // Chequeo del campo Recordame
                    return res.redirect("/");
                } else {//si no pasa nada de lo de arriba volvemos al login
                    res.render('login');
                }
            })
    },

    // PROCESO DE LOGOUT
    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/');
    },
};


module.exports = controller;