// MVC Diagram: https://mdn.mozillademos.org/files/16042/model-view-controller-light-blue.png

const port = 8000;
const db_name = "belt-review";
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config")(db_name);

const app = express();
// for our server to receive JSON: req.body will be undefined without this!
app.use(express.json());
app.use(cors());

// long-form
// const routesFunc = require("./routes/city.routes");
// routesFunc(app);

// shorthand, import the function from routes.js and then immediately execute it
require("./routes/announcement.routes")(app);

app.listen(port, () => {
  console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});
