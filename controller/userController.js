const users = require('../userHardCode')

//hardcoder ny user ud fra model-klasse

//controller
function userController(req, res) {
    res.json(users)
}


//eksporter controlleren
module.exports = userController;