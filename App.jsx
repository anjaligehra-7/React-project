/* import counter from './counter';
import EventToDo from './EventToDO';
function App() {
  return(
    <div>
      <eventtodo />

    </div>
  )
}

export default App; */
/* import Search from './Search';
 import EventToDo from './EventToDo';

function App() {
  return(
    <div>
      <EventToDo />

    </div>
  )
}

 export default App;  */
/* import counter from './counter';
function App() {
  return(
    <div>
      <eventtodo />

    </div>
  )
}

export default App;  */
/* 
 */
import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="container">

      <h1>Task Manager</h1>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />

    </div>
  );
}

export default App;