const port = 8000;
const db_name = "user_db";
const express = require("express");
const cors = require("cors");

// app.options('*', cors())


require("./config/mongoose.config")(db_name);

// var whitelist = ['http://localhost:8000', 'http://localhost:3000']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

const app = express();
app.use(express.json());
app.use(cors());

require("./routes/user.routes")(app);

app.listen(port, () => {
  // console.log('CORS-enabled web server listening on port 80')
  console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});


