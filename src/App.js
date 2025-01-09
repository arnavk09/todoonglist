import React, { useState } from "react";
import AddToDo from "./components/AddTodo";
import ToDoList from "./components/ToDoList";
import styles from "./App.module.css";

function App() {
  const [todos, setToDos] = useState([]);

  const addToDo = (text) => {
    setToDos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    const sound=new Audio('./sounds/tudoong.mp3');
    sound.play();
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteToDo = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className={styles.appContainer}>
        <h1 className={styles.header}>TODOOOONG-To Do List</h1>
        <AddToDo addToDo={addToDo} />
        <ToDoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteToDo={deleteToDo}
        />
      </div>
      <div className={styles.footer}>
        Made with ♥️ by arnavk09
      </div>
    </>
  );
}

export default App;
