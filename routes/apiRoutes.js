var friendList = require('friend.js');

module.exports = function (app) {
    app.get('/api/friends.js', function (req, res) {
        res.json(friendList);
    });
}