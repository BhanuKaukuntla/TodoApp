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

  const renderForm = () => {
    return (
      <form className="itemForm" onSubmit={editItemToState}>
        <input className="formItem" ref={textRef} type='text' defaultValue={task.task} />
        <button className="editTodo" type='submt'>Edit Todo</button>
      </form>
    );
  };
  const renderItem = () => {
    return (
      <>
        {task.task}
        <button className="editButton" onClick={() => setIsUpdate(true)}>I &spades;</button>
        <button className="deleteButton" onClick={() => dispatch(deleteTodo(task.id))}>X</button>
      </>
    );
  };

  return (
    <>
      {/* <p>  </p> */}
      <div className="todoItem">
        {isUpdate ? renderForm() : renderItem()}
      </div>
    </>
  );
};

export default TodoItem;
