function guestMiddleware (req, res, nest) {
    if (req.session.userlogged) {
        return res.redirect("/");
    }
    next ();
}

module.exports = guestMiddleware;