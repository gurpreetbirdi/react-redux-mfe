import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTodo } from "../store";

const ToDoList = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const { todos } = useSelector((state) => state.todo);
  const globalState = useSelector((state) => state);

  const addTodo = () => {
    const tempTodos = todos.slice(0);
    tempTodos.push({ id: Math.random(), item: text });
    dispatch(setTodo(tempTodos));
    setText("");
  };

  return (
    <div>
      <h2>ToDo</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add TODO</button>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>count from counter-app</h2>
        <span>{globalState.counter && globalState.counter.count}</span>
      </div>
    </div>
  );
};

export default ToDoList;
