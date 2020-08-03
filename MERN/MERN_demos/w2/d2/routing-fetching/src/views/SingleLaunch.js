import React, { useEffect, useState } from "react";

import axios from "axios";
import Loading from "../components/Loading";

const SingleLaunch = (props) => {
  const [launch, setLaunch] = useState(null);

  // [props.flight_number] means that useEffect should run again if the flight_number in props changes so that we can get the data for the different flight_number
  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/launches/${props.flight_number}`)
      .then((res) => {
        setLaunch(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.flight_number]);

  if (launch === null) {
    return <Loading />;
  }

  return (
    <div>
      <h2>Mission: {launch.mission_name}</h2>
      <p>Date: {launch.launch_date_local}</p>
      <p>Details: {launch.details}</p>
      <p>Launch Success: {launch.launch_success}</p>

      <h3>Ships:</h3>
      <ul>
        {launch.ships.map((ship, idx) => {
          return <li key={idx}>{ship}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleLaunch;
