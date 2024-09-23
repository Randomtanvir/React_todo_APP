import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from "./components/Cart/TodoItem";
import { TodoProvider } from "./contexs";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoDesc) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...todoDesc,
      },
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((indvTodo) => (indvTodo.id === id ? todo : indvTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((indvTodo) => indvTodo.id !== id));
  };

  const toggolCompleted = (id) => {
    setTodos((prev) =>
      prev.map((indvTodo) =>
        indvTodo.id === id
          ? { ...indvTodo, completed: !indvTodo.completed }
          : indvTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggolCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
