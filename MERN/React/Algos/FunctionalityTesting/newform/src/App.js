import React from "react";
import "./App.css";
import SingleQuote from "./components/SingleQuote";
import Quote from "./components/Quote";
import MakeForm from "./tests/MakeFrom";

function App() {
  return (
    <div className="App">
      <h1>Hello from create react app</h1>

      <MakeForm
        quotes={[
          {
            author: "who cares",
            text: "I don't lost any sleep at night over the potential for failure. I cannot even spell the word.",
            age: 4,
            box: "flower@power.com",
          },
          {
            author: "who cares",
            text: "You miss 100% of the shots you don't take",
            age: 43,
            box: "flower@power.com",
          },
          {
            author: "who cares",
            text:"Born too soon to explore the galaxy, born too late to explore the Earth, born just in time to browse dank memes.",
            age: 21,
            box: "flower@power.com",
          },
          {
            author: "who cares",
            text: "Any pizza is a personal pizza if you believe in yourself.",
            age: 32,
            box: "flower@power.com",
          },
        ]}
      />
    </div>
  );
}

export default App;