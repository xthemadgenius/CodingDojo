import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import SingleQuote from "./components/SingleQuote";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="App">
      <h1>Hello from create react app</h1>
      {/* <button
        onClick={(event) => {
          console.log("clicked!");
        }}
      >
        Click Me!
      </button> */}

      {/* 2 props being passed in, these props aren't used, this is just to demonstrate how to pass in props */}
      {/* <Counter startValue={5} maxValue={10} /> */}

      {/* Counter component is being instantiated, calling it's constructor */}
      {/* <Counter /> */}

      {/* <SingleQuote propFromParent="Hello my child." prop1="val1">
        When you look at the dark side, careful you must be. For the dark side
        looks back <span className="red">span element</span>{" "}
        <span>second span</span>
      </SingleQuote> */}

      <Quotes
        quotes={[
          {
            author: "who cares",
            text:
              "I don't lost any sleep at night over the potential for failure. I cannot even spell the word.",
          },
          {
            author: "who cares",
            text: "You miss 100% of the shots you don't take",
          },
          {
            author: "who cares",
            text:
              "Born too soon to explore the galaxy, born too late to explore the Earth, born just in time to browse dank memes.",
          },
          {
            author: "who cares",
            text: "Any pizza is a personal pizza if you believe in yourself.",
          },
        ]}
      />
    </div>
  );
}

export default App;
