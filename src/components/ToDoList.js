import React from "react";
import ToDoItem from "./TodoItem";

const ToDoList = ({ todos, toggleComplete, deleteToDo }) => {
    return (
      <>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
          />
        ))}
      </>
    );
  };
  
  export default ToDoList;