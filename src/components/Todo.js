import React from 'react';
import "./Todo.css";
const Todo = props => {
console.log(props);

  // const handleClick = e => {
  //   e.preventDefault();
  //   props.toggleCompletedTodo(props.item.id);
  // };

  return (
    <div onClick={() => props.toggleCompletedTodo(props.item.id) } 
    className={`item${props.item.completed ? " completed" : ""}`}>
      <h2>{props.item.name}</h2>
    </div>
  );

};

export default Todo;