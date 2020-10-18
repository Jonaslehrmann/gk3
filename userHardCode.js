//henter User model
const User = require('./model/user')
const PaymentUser = require('./model/user')
const FreeUser = require('./model/user')

let userArray = [] 
let User1 = new PaymentUser('Michael', 'Michaelsen', '19','golf','Cathrine Cathrinesen','image',1234123412341234);
let User2 = new PaymentUser('Cathrine', 'Cathrinesen', '20', 'golf','Michael Michaelsen','image',1234123412341234)

userArray = [User1, User2]

module.exports = userArray

