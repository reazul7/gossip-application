// get inbox page
function getInbox(req, res, next) {
    res.render('inbox', {
        title: 'Inbox - Gossip Application',
    });
}

module.exports = {
    getInbox
}
