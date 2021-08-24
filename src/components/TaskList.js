import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <div className="task-container">
        {props.tasks.map((item) => (
          <TaskItem todo={item.task} key={item.id} id={item.id} />
        ))}
    </div>
  );
};

export default TaskList;
