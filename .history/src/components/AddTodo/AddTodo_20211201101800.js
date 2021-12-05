import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import cuid from "cuid";

const AddTodo = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();
  function handleInputChange(e) {
    setTasks(e.target.value);
    console.log(tasks);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({ task: tasks, id: cuid() }));
    e.target.userInput.value = "";
    console.log(tasks);
  }
  return (
    <div className="todoInput">
      <form className="form" onSubmit={handleFormSubmit}>
      <input 
        className="input"
        type='text'
        name='userInput'
        onChange={(e) => handleInputChange(e)}
      />
      <button className="inputButton" type='submit'>Add</button>
     </form>
    </div>
  );
};

export default AddTodo;
