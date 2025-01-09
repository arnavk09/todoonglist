import React from "react";
import styles from "./TodoItem.module.css";

const ToDoItem = ({ todo, toggleComplete, deleteToDo }) => {
  return (
    <>
      <div className={styles.todoItem}>
        <span
          className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
          onClick={() => {
            toggleComplete(todo.id);
          }}
        >
          {todo.text}
        </span>
        <button
          className={styles.deleteButton}
          onClick={() => {
            deleteToDo(todo.id);
          }}
        >
          DELETE
        </button>
      </div>
    </>
  );
};
export default ToDoItem;
