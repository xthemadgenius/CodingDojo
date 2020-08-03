import React from "react";

const Task = (props) => {
  const labelStyles = { textDecoration: "none" };

  if (props.task.isComplete) {
    labelStyles.textDecoration = "line-through";
  }

  return (
    <div>
      <label style={labelStyles}>{props.task.title} </label>
      <input
        onChange={(event) => {
          props.toggleCompleted(props.idx);
        }}
        type="checkbox"
        checked={props.task.isComplete}
      />
      <button
        onClick={(event) => {
          props.handleDelete(props.idx);
        }}
        style={{ marginLeft: 15 }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
