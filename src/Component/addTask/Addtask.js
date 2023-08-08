import React from "react";
import "./Addtask.css"

const Addtask = ({inputValue,handleInputChange,handleAddTask}) => {

  return (
    <div className="container-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder=" new task"
      />
      <button onClick={handleAddTask}> Add </button>
    </div>
  );
};

export default Addtask;
