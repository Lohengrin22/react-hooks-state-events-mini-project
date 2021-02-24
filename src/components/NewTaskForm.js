import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")
  const allLessCategories = categories.filter((category) => (
    category !== "All")).map((category) => (<option key={category}>{category}</option>))
  
    function handleSubmit(e){
      e.preventDefault()
      const formData = {
        text,
        category
      }
      onTaskFormSubmit(formData)
    }
    

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select value={category}
        onChange={(e) => setCategory(e.target.value)}  name="category">
          {allLessCategories}
        </select>
      </label>
      <input type="submit"value="Add task"/>
    </form>
  );
}


export default NewTaskForm;
