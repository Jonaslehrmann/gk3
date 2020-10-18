const users = require('../userHardCode')
var jwt = require('jsonwebtoken');

    //normalt vil man gemme secret key et andet sted. 
    //Her laves en token, som dør om en time 

function loginController(req, res) {
    var user = users[0]
    const token = jwt.sign({user}, 'my_secret', { expiresIn: '1h' })
    res.json({
        token: token
    })
}

module.exports = loginController