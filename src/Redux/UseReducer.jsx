import React, { useReducer, useState } from "react";
import { reducer } from "./reducer.js";
import { TODO_ADDED, TODO_TOGGLED, TODO_DELETED } from "./actionTypes.js";
import Todo from "./Todo.jsx";
import { v4 } from "uuid";

const initialState = { todos: [] };

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");

  const toggleTodo = (id) => {
    dispatch({ type: TODO_TOGGLED, payload:  id  });
  };
  const deleteTodo = (id) => {
    dispatch({ type: TODO_DELETED, payload:  id  });
  };

  const handleChange = (e) => setTask(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: TODO_ADDED,
      payload: { id: v4(), task, status: false },
    });
    setTask("");
  };
  console.log("TODOS", state.todos);

  return (
    <>
        <input
          type="text"
          placeholder="Enter the todo"
          value={task}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>ADD</button>
      <div>
        {state.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
};
