import React, {useState} from 'react';
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";

function App() {
  const dummyTasks = [
    { task: "Begin React Project", id: Math.random() },
    { task: "Finish React Project", id: Math.random() },
  ];
  
  const [toDoList, setToDoList] = useState(dummyTasks);

  const saveFormData = (userData) => {
    setToDoList(prev => [userData,...prev])
  };

  return (
    <div>
      <NewTask onSaveFormData={saveFormData} />
      <TaskList tasks={toDoList} />
    </div>
  );
}

export default App;
