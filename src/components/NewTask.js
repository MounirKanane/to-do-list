import React, { useState } from "react";
import "./NewTask.css";

const NewTask = (props) => {
  const [userInput, setUserInput] = useState("");

  const taskHandler = (event) => {
    setUserInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = { task: userInput, id: Math.random() };
    props.onSaveFormData(formData);

    setUserInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="create-task__container">
        <div className="create-task__interface">
          <p> To Do's</p>
          <input
            value={userInput}
            type="text"
            placeholder="Enter task"
            onChange={taskHandler}
            required
          />
          <button type="submit">
            <span className="long-text">Add Task</span>
            <span className="short-text">Add</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewTask;
