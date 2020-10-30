import React from "react";
import { createStore } from "redux";
import { GlobalStore } from "redux-micro-frontend";

import { Todo } from "./todo";
import { AddTodo as AddTodoComponent } from "./addTodo";
import { AddTodo, RemoveTodo } from "../actions/lcoal/todo.action";
import { TodoReducer } from "../reducers/Todo.Reducer";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      globalCounter: 0,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.counterChanged = this.counterChanged.bind(this);
    this.stateChanged = this.stateChanged.bind(this);

    this.globalStore = GlobalStore.Get();

    this.store = createStore(TodoReducer);

    this.globalStore.RegisterStore("TodoApp", this.store, [
      GlobalStore.AllowAll,
    ]);

    try {
      this.globalStore.SubscribeToPartnerState(
        "TodoApp",
        "CounterApp",
        this.counterChanged
      );
    } catch (error) {
      //Since
    }
    this.globalStore.Subscribe("TodoApp", this.stateChanged);
  }

  addTodo(description) {
    this.globalStore.DispatchAction("TodoApp", AddTodo(description));
  }

  removeTodo(todoId) {
    this.globalStore.DispatchAction("TodoApp", RemoveTodo(todoId));
  }

  counterChanged(counterState) {
    this.setState({
      globalCounter: counterState.global,
    });
  }

  stateChanged(todoState) {
    this.setState({
      todos: todoState,
    });
  }

  render() {
    return (
      <div>
        <AddTodoComponent addTodo={this.addTodo}></AddTodoComponent>
        <h2>Todos</h2>
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li key={todo.id}>
                <Todo
                  id={todo.id}
                  description={todo.description}
                  removeTodo={this.removeTodo}
                />
              </li>
            );
          })}
        </ul>
        <div>Global Counter: {this.state.globalCounter}</div>
      </div>
    );
  }
}
