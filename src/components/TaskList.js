import React from "react";
import Task from "./Task"


function TaskList({tasks, onDeleteTask}) {
 
  const allTasks = tasks
  .map((tasks) => (
      <Task 
      key={tasks.text} 
      text={tasks.text} 
      category={tasks.category}
      onDeleteTask={onDeleteTask} 
      />
    )
  )
  return (
    <div className="tasks">
      {allTasks}
    </div>
  );
}

export default TaskList;
