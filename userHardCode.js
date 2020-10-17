//henter User model
const User = require('./Model/user')

let userArray = [] 
let User1 = new User('Thomas', 'Tog', '217', '12');
let User2 = new User('Emil', 'Emilianos', '1000', '123')

userArray = [User1, User2]

module.exports = userArray
console.log(User1)