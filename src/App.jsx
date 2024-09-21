import { Button } from "./components/ui/button";
import TodoForm from "./components/TodoForm/TodoForm";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <div className="h-screen  flex justify-center p-10 bg-[#073255]">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl text-white mb-6 text-center">
            Manage Your Todos
          </h1>
          <TodoForm />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
