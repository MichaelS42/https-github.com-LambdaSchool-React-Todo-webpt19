import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{
        task: "",
        id: Date.now(),
        completed: false,
      }],
    };
  }

  addTodoItem = (todoItemName) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: todoItemName,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  toggleCompletedTodo = (todoItemId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === todoItemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  render() {
    return (
      <div className="TODO ITEMS APP">
        <div className="header">
          <h1>FUNCTIONAL TODOS LIST</h1>
          <TodoForm addTodoItem={this.addTodoItem} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleCompletedTodo={this.toggleCompletedTodo}
          clearCompletedTodos={this.completedTodos}
        />
      </div>
    );
  }
}

export default App;
