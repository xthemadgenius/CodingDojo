# Welcome to Express

# Express set up

mkdir foldername

cd foldername

npm init -yes

npm install express

// write base code to runserver

const express = require("express");
const app = express();
const port = 8000;
    
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

# runserver
node server.js

# active run updates on server

//Windows global install
npm install -g nodemon          // haha nodemon🤣🤣

//Mac global install
sudo npm install -g nodemon     // haha nodemon🤣🤣 too funny