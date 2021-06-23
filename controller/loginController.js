// get login page
function getLogin(req, res, next) {
    res.render('index', {
        title: 'Login - Gossip Application',
    });
}

module.exports = {
    getLogin
}
