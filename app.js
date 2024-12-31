// Import Express

const express = require('express');

const app = express();

const port = 3000;
 
// Define a route

app.get('/', (req, res) => {

  res.send('Hello, Welcome to  Node.js!');

});
 
// Start the server

app.listen(port, () => {

  console.log(`Server running at http://localhost:${port}`);

});

 