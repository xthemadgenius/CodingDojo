# Create Mern App

mkdir PROJNAME

cd PROJNAME

npm init -y

npm install express

npm install mongoose 

Mac: touch server.js

Windows: copy num server.js

<!-- type this in server.js -->

const express = require('express');

const app = express();

const port = 8000;
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );

npx create-react-app client
