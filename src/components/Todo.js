import React from 'react';

const Todo = props => {

  const handleClick = event => {
    props.toggleCompletedTodo(props.todo.id);
  };

  return (
    <div onClick={handleClick} 
    className={`todo${props.todo.completed ? "completed" : ""}`}>
      <h2>{props.todo.name}</h2>
    </div>
  );

};

export default Todo;