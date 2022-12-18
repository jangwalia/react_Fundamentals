import { useState } from "react";
function Todo() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState(" ");

  const addTodo = (event) => {
    const newInputValue = event.target.value;

    setNewTask(newInputValue);
  };

  const addnewTodo = (event) => {
    event.preventDefault();
    setTodo((prev) => {
      let newArr = [...prev];
      newArr.push(newTask);
      return newArr;
    });
    setNewTask("");
  };
  return (
    <>
      <form onSubmit={addnewTodo}>
        <label htmlFor="EnterTodo">Enter Todo</label>
        <input onChange={addTodo} type="text" id="EnterTodo" value={newTask} />
        <button type="submit"> Add Todo</button>
      </form>
      {todo.map((td, index) => (
        <li key={index}>{td}</li>
      ))}
    </>
  );
}

export default Todo;
