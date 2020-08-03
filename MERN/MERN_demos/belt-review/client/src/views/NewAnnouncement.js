import React, { useState } from "react";

import { navigate } from "@reach/router";
import axios from "axios";

const NewAnnouncement = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [secondaryCategory, setSecondaryCategory] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAnnouncement = {
      // long-form
      title: title,

      // shorthand
      description,
      imgUrl,
      primaryCategory,
    };
    /*
      secondaryCategory is not required, but if we add it and it's an empty string, it will cause a minlength validation error since empty string is length of 0
    */
    // secondaryCategory && (newAnnouncement.secondaryCategory = secondaryCategory);
    if (secondaryCategory !== "") {
      newAnnouncement.secondaryCategory = secondaryCategory;
    }

    axios
      .post("http://localhost:8000/api/announcements", newAnnouncement)
      .then((res) => {
        navigate("/announcements");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err);
      });
  };

  return (
    <div>
      <h2>New Announcement</h2>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label>Title: </label>
          {errors && (
            <p style={{ color: "red" }}>
              {/* ?. is called optional chaining, NEW feature in JS */}
              {errors?.title?.properties?.message}
            </p>
          )}
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Description: </label>
          {errors && (
            <p style={{ color: "red" }}>
              {errors?.description?.properties?.message}
            </p>
          )}
          <input
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Image Url: </label>
          {errors && (
            <p style={{ color: "red" }}>
              {errors?.imgUrl?.properties?.message}
            </p>
          )}
          <input
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Primary Category: </label>
          {errors && (
            <p style={{ color: "red" }}>
              {errors?.primaryCategory?.properties?.message}
            </p>
          )}
          <input
            onChange={(event) => {
              setPrimaryCategory(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Secondary Category: </label>
          {errors && (
            <p style={{ color: "red" }}>
              {errors?.secondaryCategory?.properties?.message}
            </p>
          )}
          <input
            onChange={(event) => {
              setSecondaryCategory(event.target.value);
            }}
            type="text"
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewAnnouncement;
