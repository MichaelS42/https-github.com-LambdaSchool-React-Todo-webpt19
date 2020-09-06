import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
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
        if (todoItemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        console.log("app: toggleCompletedTodo: after if", item)
        console.log("app: toggleCompletedTodo: ")
        return item;
      }),
    });
  };

  clearCompletedTodos = () => {
    console.log("clear todos")
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed;
      })
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
          clearCompletedTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
