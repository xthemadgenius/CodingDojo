const port = 8000;
const express = require("express");
const app = express();

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const io = require("socket.io")(server);

let totalConnections = 0;

const bidItem = {
  name: "How to actually learn any new programming concept.",
  description: "Programming book.",
  imgUrl: "https://i.redd.it/rslicsmlzcl01.jpg",
  startPrice: 19.95,
  currentPrice: 19.95,
  buyoutPrice: 39.99,
  category: "Books",
  isSold: false,
  bids: [],
};

io.on("connect", (socket) => {
  totalConnections++;
  console.log(`New bidder connected. ${totalConnections} bidders connected.`);

  //         ("custom name for event", "data to pass to the socket")
  socket.emit("item updated", bidItem);

  socket.on("new bid", (amount) => {
    bidItem.currentPrice = amount;
    // let all other people connected know that the item has been updated since they are listening for this event

    bidItem.bids.push({
      id: socket.id,
      amount,
      date: new Date(),
    });

    io.emit("item updated", bidItem);
  });

  socket.on("disconnect", () => {
    totalConnections--;
    console.log(`Bidder disconnected. ${totalConnections} bidders connected.`);
  });
});
