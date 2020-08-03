import React, { useState } from "react";
import "./App.css";

import Product from "./components/Product";

function App() {
  const [name, setName] = useState("");

  let errorMessage = "";

  if (name.length <= 2) {
    errorMessage = "bad";
  } else {
    errorMessage = "good";
  }

  return (
    <div className="App">
      <Product />

      <form>
        <p>{errorMessage}</p>
        <label style={{ color: name.length <= 2 ? "red" : "green" }}>
          Name:{" "}
        </label>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
        />
      </form>
    </div>
  );
}

export default App;
