const express = require('express')

const server = express()
const port = 3000


const userController = require('./controller/userController')
const protectedController = require('./controller/Protectedcontroller')
const loginController = require('./controller/loginController')

const ensureToken = require('./Middleware/ensureToken')

server.get('/', userController)

server.get('/protected', ensureToken,  protectedController)


server.post('/login', loginController)

server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})
console.log(`Server-applikation lytter på http://localhost:${port}`)
