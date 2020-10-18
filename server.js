const express = require('express')

const server = express()
const port = 3000


const userController = require('./controller/userController')
const protectedController = require('./controller/protectedController')
const loginController = require('./controller/loginController')
const ensureToken = require('./token/ensureToken')

server.get('/', userController)
server.get('./controller/protectedController', ensureToken,  protectedController)


server.post('/login', loginController)

server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})
//test
