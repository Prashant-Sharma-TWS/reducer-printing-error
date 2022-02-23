import { TODO_ADDED, TODO_TOGGLED, TODO_DELETED } from "./actionType.js";

let lastId = 0;
const addTodoAction = (task) => ({
  type: TODO_ADDED,
  payload: {
    id: ++lastId,
    task,
    status: false,
  },
});

const toogleTodoAction = (id) => ({
  type: TODO_TOGGLED,
  payload:  id ,
});

const deleteTodoAction = (id) => ({
  type: TODO_DELETED,
  payload:  id ,
});

export { addTodoAction, toogleTodoAction, deleteTodoAction };
