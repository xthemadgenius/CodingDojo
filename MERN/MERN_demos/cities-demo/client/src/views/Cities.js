import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Cities = (props) => {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities")
      .then((res) => {
        setCities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (delId) => {
    axios
      .delete("http://localhost:8000/api/cities/" + delId)
      .then((res) => {
        const filteredCities = cities.filter((city) => {
          // return true when it's not the delId that needs to be deleted, true means .filter will keep it
          return city._id !== delId;
        });

        // must pass in a NEW array for it to update, .filter returns a new array
        setCities(filteredCities);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (cities === null) {
    return (
      <img
        src="https://www.demilked.com/magazine/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif"
        alt="Loading"
      />
    );
  }

  return (
    <div>
      <h2>All Cities</h2>

      {cities.map((city) => {
        return (
          <div key={city._id}>
            <h2>
              <Link to={"/cities/" + city._id}>{city.name}</Link>
              {/* <Link to={`/cities/${city._id}`}>{city.name}</Link> */}
            </h2>
            <p>Population: {city.population}</p>
            <img
              style={{
                paddingBottom: 20,
                width: "20%",
              }}
              src={city.imgUrl}
              alt={`${city.name} City`}
            />

            <div>
              <button
                onClick={(event) => {
                  handleDelete(city._id);
                }}
              >
                Delete
              </button>{" "}
              |{" "}
              <button
                onClick={(event) => {
                  navigate(`/cities/${city._id}/edit`);
                }}
              >
                Edit
              </button>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Cities;
