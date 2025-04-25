// Import Express

const express = require('express');

const app = express();

const port = 3000;
 
// Define a route

app.get('/', (req, res) => {

  res.send('Hi,Hello Welcome to the world of  Node.js file!!!!');

});
 
// Start the server

app.listen(port, () => {

  console.log(`Server running at http://localhost:${port}`);

});

///demo test
