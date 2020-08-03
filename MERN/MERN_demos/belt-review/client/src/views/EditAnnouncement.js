import React, { useEffect, useState } from "react";

import { navigate } from "@reach/router";
import axios from "axios";

const EditAnnouncement = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [secondaryCategory, setSecondaryCategory] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/announcements/" + props.id)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setImgUrl(res.data.imgUrl);
        setPrimaryCategory(res.data.primaryCategory);
        setSecondaryCategory(res.data.secondaryCategory);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const editAnnouncement = {
      // long-form
      title: title,

      // shorthand
      description,
      imgUrl,
      primaryCategory,
      secondaryCategory,
    };
    /*
      secondaryCategory is not required, but if we add it and it's an empty string, it will cause a minlength validation error since empty string is length of 0
    */

    axios
      .put(
        `http://localhost:8000/api/announcements/${props.id}`,
        editAnnouncement
      )
      .then((res) => {
        navigate("/announcements/" + props.id);
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
            value={title}
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
            value={description}
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
            value={imgUrl}
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
            value={primaryCategory}
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
            value={secondaryCategory}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditAnnouncement;
