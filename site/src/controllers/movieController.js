const controller = {
    index: (req,res) => {
    res.render('index');
    },

    detailMovie: (req,res) => {
        res.render('detailmovie');
        },

    register: (req,res) => {
        res.render('register');
        },

        login: (req,res) => {
            res.render('login');
            },
  
};




module.exports = controller;