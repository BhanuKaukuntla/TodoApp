// import React, { useState, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { deleteTodo, updateTodo } from "../../actions";

// const TodoItem = ({ task }) => {
//   const [isUpdate, setIsUpdate] = useState(false);
//   const dispatch = useDispatch();
//   const textRef = useRef(null);
//   function editItemToState(e) {
//     e.preventDefault();
//     dispatch(updateTodo({ message: textRef.current.value, id: task.id }));
//     setIsUpdate(false);
//     textRef.current = null;
//   }

//   const renderForm = () => {
//     return (
//       <form className="itemForm" onSubmit={editItemToState}>
//         <input className="formItem" ref={textRef} type='text' defaultValue={task.task} />
//         <button className="editTodo" type='submt'>Edit Todo</button>
//       </form>
//     );
//   };
//   const renderItem = () => {
//     return (
//       <>
//       {/* {task.task}
//           <button className="editButton" onClick={() => setIsUpdate(true)}>&#9998;</button>
//           <button className="deleteButton" onClick={() => dispatch(deleteTodo(task.id))}>&#10005;</button> */}
//         <div className="icons">
//           {task.task}
//           <button className="editButton" onClick={() => setIsUpdate(true)}>&#9998;</button>
//           <button className="deleteButton" onClick={() => dispatch(deleteTodo(task.id))}>&#10005;</button>
//         </div>
//       </>
//     );
//   };

//   return (
//     <>
//       {/* <p>  </p> */}
//       <div className="todoItem">
//         {isUpdate ? renderForm() : renderItem()}
//       </div>
//     </>
//   );
// };

// export default TodoItem;



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
        <button className="editTodo" type='submt'>Edit Todo</button>
      </form>
         : 
         <>
          {task.task}
          <button className="editButton" onClick={() => setIsUpdate(true)}>&#9998;</button>
          <button className="deleteButton" onClick={() => dispatch(deleteTodo(task.id))}>&#10005;</button>
        </>
         }
      </div>
    </>
  );
};

export default TodoItem;