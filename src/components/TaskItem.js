import { useState } from "react";
import "./TaskItem.css";

const TaskItem = (props) => {
  const [isDelete, setDelete] = useState(false);
  const [isOpaque, setIsOpaque] = useState(true);

  const onClickHandler = () => {
    setDelete(true);
  };

  const opacityChangeHandler = () => {
    if (isOpaque) {
      document.getElementById(props.id + "1").className += " opacity";
      setIsOpaque(false);
    } else {
      document.getElementById(props.id + "1").className = "task-item";
      setIsOpaque(true);
    }
  };

  if (!isDelete) {
    return (
      <div className="task-item" id={props.id + "1"}>
        <div className="task-details">
          <input
            type="checkbox"
            id={props.id + ""}
            onChange={opacityChangeHandler}
          />
          <label htmlFor={props.id + ""}>{props.todo}</label>
        </div>
        <div className="delete-task" onClick={onClickHandler}></div>
      </div>
    );
  } else {
    return null;
  }
};

export default TaskItem;
