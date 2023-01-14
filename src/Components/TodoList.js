import React, { useEffect, useState } from "react";

function TodoList() {
  const [todoList, setToDoList] = useState([]);
  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    const newTodoList = [...todoList, task];
    setToDoList(newTodoList);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((value) => {
      return value.id !== id;
    });
    setToDoList(newTodoList);
  };

  return (
    <>
      <div>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div>
        {todoList.map((value, key) => {
          return (
            <div>
              <h1>{value.taskName}</h1>
              <button onClick={() => deleteTask(value.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
