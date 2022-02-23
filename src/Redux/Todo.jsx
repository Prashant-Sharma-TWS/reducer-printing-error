import React from "react";

export default function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <div>
      <span>{todo.task}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
    </div>
  );
}
