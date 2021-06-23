// get users page
function getUsers(req, res, next) {
    res.render('users', {
        title: 'Users - Gossip Application',
    });
}

module.exports = {
    getUsers
}
