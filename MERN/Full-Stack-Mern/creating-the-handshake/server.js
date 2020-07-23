const express = require("express");
const cors = require('cors');
const port = 8000;
const app = express();

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(port, () => console.log(`The server is all fired up on port ${port}`));

const io = require("socket.io")(server);

io.on("connection", socket => {
    console.log(socket.id)
    console.log('Nice to meet you (shakes hand)')
    socket.on("event_from_client", data => {
        socket.broadcast.emit("send_data_to_all_other_clients", data);
    })
})
