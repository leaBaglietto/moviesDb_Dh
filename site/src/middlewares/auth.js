module.exports = (req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user;
    };
    res.locals.session = req.session.user;
    console.log('auth.js : DATOS ACTUALES DE MI SESSION :', res.locals.session);
    next();
};