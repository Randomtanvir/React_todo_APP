import { createContext, useContext } from "react";

export const TodoContex = createContext({
  todos: [
    {
      id: 1,
      todoDesc: "Hello todo",
      completed: false,
    },
  ],
  addTodo: (todoDesc) => {},
  updateTodo: (id, todoDesc) => {},
  deleteTodo: (id) => {},
  toggolCompleted: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContex);
};

export const TodoProvider = TodoContex.Provider;
