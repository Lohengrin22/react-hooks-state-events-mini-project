import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [currentTasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")
  
  function addToTaskList(taskdata){
    setTasks([...currentTasks, taskdata])
  }

  const filteredTasks = currentTasks.filter((task) => category === "All" || task.category === category);
  
  function removeTask(text){
    
    setTasks((currentTasks) => currentTasks.filter((task) => task.text !== text))
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter setCategory={category} onHandleCategory={setCategory} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={addToTaskList} categories={CATEGORIES} />
      <TaskList onDeleteTask={removeTask} tasks={filteredTasks}/>
    </div>
  );
}

export default App;
