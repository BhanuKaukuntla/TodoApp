import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../actions";

const TodoItem = ({ task }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const textRef = useRef(null);
  function editItemToState(e) {
    e.preventDefault();
    dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
    setIsUpdate(false);
    textRef.current = null;
  }
  return (
    <>
      {/* <p>  </p> */}
      <div className="todoItem">
        {isUpdate ? 
        <form className="itemForm" onSubmit={editItemToState}>
        <input className="formItem" ref={textRef} type='text' defaultValue={task.task} />
        <button className="editTodo" type='submt'>Save</button>
      </form>
         : 
         <>
          {task.task}
          {/* <button className="editButton" onClick={() => setIsUpdate(true)}>&#9998;</button> */}
          {/* <button className="deleteButton" onClick={() => dispatch(deleteTodo(task.id))}>&#10005;</button> */}
          <div className="editButton" onClick={() => setIsUpdate(true)}>&#9998;</div>
          <div className="deleteButton" onClick={() => dispatch(deleteTodo(task.id))}>&#10005;</div>
        </>
         }
      </div>
    </>
  );
};

export default TodoItem;




















