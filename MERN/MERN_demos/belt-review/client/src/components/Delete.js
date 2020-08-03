import React from "react";
import axios from "axios";

const Delete = (props) => {
  return (
    <button
      onClick={(event) => {
        // props.handleDelete(props.id);
        // for the commented <Delete> comment underneath the uncommented on in Announcements.js
        // props.handleDelete();
      }}
    >
      Delete From Nested Component
    </button>
  );
};

export default Delete;
