const express = require('express');
const app = express();

const port = 3000;



//henter controller fra sti
let userController = require('./Controller/userController')


server.get('/', userController)


server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})
app.listen(3000);