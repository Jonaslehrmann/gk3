const express = require('express')

const server = express()
const port = 3000


const userController = require('../controller/userController')
const protectedController = require('../controller/protectedController')
const loginController = require('../controller/loginController')
const ensureToken = require('../token/ensuretoken')

server.get('/', userController)
server.get('../controller/protectedController', ensureToken,  protectedController)


server.post('/login', loginController)



app.get('/userHardCode', (req, res) => { //GET is used to retrieve data from the database
  res.send(userArray)

});

app.post('/userHardCode', (req, res) => { //POST is used to send to the database
  res.send("Post request recieved")

});

app.put('/userHardCode', (req, res) => { //PUT is used to update existing resources. It repalces the entire resource and doesn't do partial updates
  res.send("Put request recieved")

});

app.delete('/userHardCode', (req, res) => { //DELETE simply deletes resources from the database
  res.send("Delete request recieved")

});


app.get('/userHardCode/interest', (req, res) => { //GET is used to retrieve data from the database
  res.send("User1: " + user1.interest + " User2: " + user2.interest)

});

app.post('/userHardCode/interest', (req, res) => { //POST is used to send to the database
  res.send("Post request recieved")

});

app.put('/userHardCode/interest', (req, res) => { //PUT is used to update existing resources. It repalces the entire resource and doesn't do partial updates
  res.send("Put request recieved")

});

app.delete('/userHardCode/interest', (req, res) => { //DELETE simply deletes resources from the database
  res.send("Delete request recieved")

});

app.get('/userHardCode/match', (req, res) => { //GET is used to retrieve data from the database
  res.send(user1.match + " " + user2.match)

});

app.post('/userHardCode/match', (req, res) => { //POST is used to send to the database
  res.send("Post request recieved")

});

app.put('/userHardCode/match', (req, res) => { //PUT is used to update existing resources. It repalces the entire resource and doesn't do partial updates
  res.send("Put request recieved")

});

app.delete('/userHardCode/match', (req, res) => { //DELETE simply deletes resources from the database
  res.send("Delete request recieved")

});


app.listen(port, console.log('The server is running on port ' + port));
