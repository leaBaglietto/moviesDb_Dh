module.exports = (req, res, next) => {
    //validaciones para saber si es administrador o usuario comun. esto sirve para saber si puede o no editar un producto, o crear producto  
    if (req.session.user && req.session.user.rol == '1') {
        console.log('usuario Admin');
        next();
    }else{
        //next();
        return res.redirect('/');//redireccionamiento por si no cumple ser administrador
    } 
};