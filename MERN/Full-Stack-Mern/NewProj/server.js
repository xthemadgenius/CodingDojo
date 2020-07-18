const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());


require('./server/routes/person.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );