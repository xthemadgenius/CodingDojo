import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import Homepage from "./views/Homepage";
import Secondary from "./views/Secondary";
import Launches from "./views/Launches";
import SingleLaunch from "./views/SingleLaunch";

function App() {
  return (
    <div className="App">
      <Link to="/">Homepage</Link> | <Link to="/secondary">Secondary</Link> |{" "}
      <Link to="/launches">Launches</Link>
      <hr />
      <Router>
        {/* path is the URL to this view (component that represents a page) */}
        <Homepage path="/" />
        <Secondary path="/secondary" />
        <Launches path="/launches" />
        <SingleLaunch path="launches/:flight_number" />
        <Redirect from="/home" to="/" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
