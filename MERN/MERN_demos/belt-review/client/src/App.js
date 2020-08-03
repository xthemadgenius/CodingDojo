import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import Announcements from "./views/Announcements";
import NewAnnouncement from "./views/NewAnnouncement";
import Announcement from "./views/Announcement";
import EditAnnouncement from "./views/EditAnnouncement";

function App() {
  return (
    <div className="App">
      <Link to="/announcements/new">New Announcement</Link> |{" "}
      <Link to="/announcements">Announcements</Link>
      <Router>
        <Redirect from="/" to="/announcements" noThrow="true" />
        <Announcements path="/announcements" />
        <NewAnnouncement path="/announcements/new" />
        <Announcement path="/announcements/:id" />
        <EditAnnouncement path="/announcements/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
