const controller = {
    index: (req,res) => {
    res.render('index');
    },

    detailMovie: (req,res) => {
        res.render('detailmovie');
        }
  
};




module.exports = controller;