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
            password:  bcryptjs.hashSync(req.body.password, 10) 
        })
            .then(() => res.redirect("/users/login"));
    },

    // -----------------------------------------------
login: (req, res) => {
        res.render('login');
    }, 

    loginProcess: (req, res) => {
		let userToLogin = loginTable.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				return res.redirect('/user/profile');
			} 
			return res.render('userLogin', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}
		return res.render('userLogin', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
}};


module.exports = controller;