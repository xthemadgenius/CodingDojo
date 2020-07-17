const express = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));
const allJokes = require("./server/routes/jokes.routes");
allJokes(app);
app.listen(8000, () => console.log("The servreis all fired up on port 8000"));