import React from "react";
import "./App.css";
import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import NewCity from "./views/NewCity";
import Cities from "./views/Cities";
import City from "./views/City";
import EditCity from "./views/EditCity";

function App() {
  return (
    <div className="App">
      <Link to="/cities">Cities</Link> | <Link to="/cities/new">New City</Link>
      <hr />
      <Router>
        <Redirect from="/" to="/cities" noThrow="true" />
        <NotFound default />
        <NewCity path="/cities/new" />
        <Cities path="/cities" />
        <City path="/cities/:id" />
        <EditCity path="/cities/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
