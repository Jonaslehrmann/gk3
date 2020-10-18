//henter User model
const User = require('./model/user')

let userArray = [] 
let User1 = new User('Michael', 'Michaelsen', '19','golf','Cathrine Cathrinesen','image');
let User2 = new User('Cathrine', 'Cathrinesen', '20', 'golf','Michael Michaelsen','image')

userArray = [User1, User2]

module.exports = userArray


console.log(User1, User2)