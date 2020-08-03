import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const City = (props) => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/" + props.id)
      .then((res) => {
        setCity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (city === null) {
    return "Loading...";
  }

  return (
    <div key={city._id}>
      <h2>{city.name}</h2>
      <p>Population: {city.population}</p>
      <img
        style={{
          paddingBottom: 20,
          borderBottom: "2px solid gray",
          width: "80%",
        }}
        src={city.imgUrl}
        alt={`${city.name} City`}
      />
      <div>
        <button
          onClick={(event) => {
            navigate(`/cities/${city._id}/edit`);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default City;
