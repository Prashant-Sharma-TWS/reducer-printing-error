import { TODO_ADDED, TODO_TOGGLED, TODO_DELETED } from "./actionTypes";

export function reducer(state, { type, payload }) {
  switch (type) {
    case TODO_ADDED:
      state.todos = [...state.todos, { ...payload }];
      return { ...state };

    case TODO_TOGGLED:
      state.todos = state.todos.map((todo) => {
        todo.id === payload ? (todo.status = true) : "";
      });
      return { ...state };

    case TODO_DELETED:
      state.todos = state.todos.filter((todo) => todo.id !== payload);
      return { ...state };

    default:
      return state;
  }
}
