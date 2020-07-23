const express =require('express');
const cors = require('cors');
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const server = app.listen(port, () => console.log(`Listening to ${port}`));

const io = require('socket.io')(server);

var users =[];

io.on("connection", socket => {

    socket.on("new_user_connecting", data => {
        users.path(data);
        socket.broadcast.emit(`new_user_announcement`, `${data} has joined the chat`);
    })
    
    socket.on("new_message_from_client", data => {
        console.log(data);
        socket.broadcast.emit(`send_message_to_all_other_clients`, data);
    })
})