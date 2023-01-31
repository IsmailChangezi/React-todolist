import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoList from './TodosList';
import { Header } from './Header';
import InputTodo from './InputTodo';

export default class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup Development Environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop Website and Add Content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <ToDoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
          />
          <InputTodo addTodoProps={this.addTodoItem} />
        </div>
      </div>
    );
  }
}
