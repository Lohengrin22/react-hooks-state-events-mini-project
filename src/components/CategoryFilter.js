import React from "react";

function CategoryFilter({categories, setCategory, onHandleCategory}) {
  
  const allCategories = categories.map((category) => {
    const className = category === setCategory ? "selected" : null;
   
    return (<button
    onClick={()=> onHandleCategory(category)}
    key={category}
    className={className}
    >
      {category}
  </button>  
    )}
  );
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {allCategories}
    </div>
  );
}

export default CategoryFilter;
