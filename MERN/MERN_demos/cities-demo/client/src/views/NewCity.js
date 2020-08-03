import React, { useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const NewCity = (props) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCity = {
      // long-form
      name: name,
      // shorthand, when key name matches the name of the var that stores the value
      population,
      imgUrl,
    };

    axios
      .post("http://localhost:8000/api/cities", newCity)
      .then((res) => {
        console.log(res);
        navigate("/cities");
      })
      .catch((err) => {
        // this catch happens because of the res.status(400) in the controller
        setErrors(err.response.data.errors);
        console.log(err.response);
      });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label>Name: </label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            value={name}
          />
          {errors && (
            <span style={{ color: "red" }}>
              {/* ?. is called optional chaining, NEW feature in JS */}
              {errors?.name?.properties?.message}
            </span>
          )}
        </div>

        <div>
          <label>Population: </label>
          <input
            onChange={(event) => {
              setPopulation(event.target.value);
            }}
            type="number"
            value={population}
          />
          {errors && (
            <span style={{ color: "red" }}>
              {errors?.population?.properties?.message}
            </span>
          )}
        </div>

        <div>
          <label>Image Url: </label>
          <input
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
            type="text"
            value={imgUrl}
          />
          {errors && (
            <span style={{ color: "red" }}>
              {errors?.imgUrl?.properties?.message}
            </span>
          )}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewCity;
