import React from 'react';

const Todo = props => {
console.log(props)
  const handleClick = e => {
    props.toggleCompletedTodo(props.item.id);
  };

  return (
    <div onClick={handleClick} 
    className={`item${props.item.completed ? "completed" : ""}`}>
      <h2>{props.item.name}</h2>
    </div>
  );

};

export default Todo;