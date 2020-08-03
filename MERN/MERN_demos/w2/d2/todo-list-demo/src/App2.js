import React, { useState } from "react";
import "./App.css";

import Task from "./components/Task";

function App2() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // states that are objects / arrays must have a brand new object / array passed to the state setter function
    const newTask = { title: taskTitle, isComplete: false };
    setTasks([...tasks, newTask]);

    // clear input box
    setTaskTitle("");
  };

  const handleDelete = (delIdx) => {
    /* method 1: */
    const filteredTasks = tasks.filter((task, idx) => {
      return idx !== delIdx;
    });

    setTasks(filteredTasks);

    /* shorthand filter */
    // setTasks(tasks.filter((task, idx) => idx !== delIdx));

    /* method 2: manually create the filtered array: */
    // const filteredTasks = [];

    // for (let i = 0; i < tasks.length; i++) {
    //   if (i !== delIdx) {
    //     filteredTasks.push(tasks[i]);
    //   }
    // }

    // setTasks(filteredTasks);

    /* method 3 (not as good of a practice): */
    // tasks.splice(delIdx, 1);
    // setTasks([...tasks]);
  };

  const toggleCompleted = (idxToUpdate) => {
    // use .map to create a new array so our setTasks will actually update
    // .map will return each task as it is, except change the one that needs to be updated
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === idxToUpdate) {
        // copy it first so we don't alter the state directly
        const updatedTask = { ...task };
        updatedTask.isComplete = !task.isComplete;
        return updatedTask;
        // return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>App2</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label>New Task </label>
          <input
            onChange={(event) => {
              setTaskTitle(event.target.value);
            }}
            type="text"
            value={taskTitle}
          />
        </div>
        <button>Add</button>
      </form>
      <hr />

      {tasks.map((task, idx) => {
        return (
          <Task
            key={idx}
            task={task}
            idx={idx}
            toggleCompleted={toggleCompleted}
            handleDelete={handleDelete}
          ></Task>
        );
      })}
    </div>
  );
}

export default App2;
