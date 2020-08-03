import React, { useEffect, useState } from "react";
import "./App.css";

import io from "socket.io-client";
// alternative to setting up the socket as state, create it outside of component which means it is only ran
// one time when this file is imported / required by react
// const socket = io(":8000");

function App() {
  // initial state ist he returned socket from the io function call
  const [socket] = useState(() => io(":8000"));
  const [bidItem, setBidItem] = useState(null);
  const [bidAmount, setBidAmount] = useState("");

  useEffect(() => {
    // this useEffect runs only when the component is mounted
    // so we establish the listening only one time and then it keeps listening, we don't want duplicate listeners listening for the same event
    socket.on("item updated", (updatedBidItem) => {
      setBidItem(updatedBidItem);

      // set the current bid to $1 more and make sure it stays at 2 decimal places (floating point imprecision)
      setBidAmount((updatedBidItem.currentPrice + 1).toFixed(2));
    });

    // this returned callback will be executed when the component "unmounts" (when removed from DOM)
    return () => {
      socket.disconnect(true);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (bidAmount > bidItem.currentPrice) {
      // + means convert to number
      socket.emit("new bid", +bidAmount);
    }
  };

  if (bidItem === null) {
    return "Loading...";
  }

  const getButtonDisabledState = () => {
    return bidAmount <= bidItem.currentPrice;
  };

  return (
    <div className="App">
      <form
        style={{ marginTop: 40 }}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          onChange={(event) => {
            setBidAmount(event.target.value);
          }}
          type="number"
          step=".05"
          value={bidAmount}
        />{" "}
        <button disabled={bidAmount <= bidItem.currentPrice}>Place Bid</button>
        {/* <button disabled={getButtonDisabledState()}>Place Bid</button> */}
      </form>

      <h1>Bidding App</h1>
      <hr />

      <h2>{bidItem.name}</h2>
      <p>Description: {bidItem.description}</p>
      <h3>Start Price: {bidItem.startPrice}</h3>
      <h2>Current Price: {bidItem.currentPrice}</h2>
      <div>
        <img src={bidItem.imgUrl} alt="Bid Item" width="30%" />
      </div>

      <ul>
        {bidItem.bids.map((bid) => {
          return (
            <li>
              Amount: {bid.amount} | By: {bid.id} | On: {bid.date}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
