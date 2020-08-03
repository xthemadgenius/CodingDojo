import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

import Loading from "../components/Loading";

const Launches = (props) => {
  const [launches, setLaunches] = useState(null);

  useEffect(() => {
    // surround fetchLaunches in a setTimeout if it loads too fast to see the loading page
    fetchLaunches();
  }, []);

  function fetchLaunches() {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((res) => {
        setLaunches(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (launches === null) {
    return <Loading />;
  }

  return (
    <div>
      <h2>All Launches</h2>
      {launches.map((launch) => {
        return (
          <div key={launch.flight_number}>
            <h2>
              Mission:{" "}
              <Link to={"/launches/" + launch.flight_number}>
                {launch.mission_name}
              </Link>
            </h2>
            <p>
              Date:
              <small>{launch.launch_date_local}</small>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Launches;
