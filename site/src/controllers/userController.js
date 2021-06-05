const db = require("../../database/models"); 
const controller = {
    register: (req,res) => {
        res.render('register');
        },

        login: (req,res) => {
            res.render('login');
            },

  
};




module.exports = controller;