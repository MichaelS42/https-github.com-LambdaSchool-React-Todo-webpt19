import React, { useState } from "react";

const TodoForm = (props) => {
  
  console.log(props)
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoItem(todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
