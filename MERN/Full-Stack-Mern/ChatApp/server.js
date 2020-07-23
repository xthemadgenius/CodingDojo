const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(8000, () => console.log("Listening to port:8000"));

const io = require('socket.io')(server);

var users = [];

io.on("connection", socket => {

    socket.on("new_user_connecting", data => {
        users.push(data);
        socket.broadcast.emit("new_user_announcement",  data + " has joined the chat.");
    })

    socket.on("new_message_from_client", data => {
        console.log(data);
        socket.broadcast.emit("send_message_to_all_other_clients", data);
    });
});