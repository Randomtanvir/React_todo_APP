import { useTodo } from "@/contexs";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// eslint-disable-next-line react/prop-types
function TodoItem({ todo }) {
  // eslint-disable-next-line react/prop-types
  const { id, completed, todoDesc } = todo;

  const [todoMsg, setTodoMsg] = useState(todoDesc);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const { updateTodo, deleteTodo, toggolCompleted } = useTodo();

  // local Function for todoEditing
  const editTodo = () => {
    updateTodo(id, { ...todo, todoDesc: todoMsg }); // come from contex
    setIsTodoEditable(false);
  };

  // local Function for todo completed
  const toggleDone = () => {
    toggolCompleted(id); // come from contex
  };

  // local Function for todo delete
  const removeTodo = () => {
    deleteTodo(id); // come from contex
  };

  return (
    <div
      className={`flex w-full border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        // eslint-disable-next-line react/prop-types
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        onChange={toggleDone}
        checked={completed}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${completed ? "line-through" : ""} ${
          completed ? "border-transparent" : ""
        }`}
        value={todoMsg}
        onChange={(e) => {
          if (completed) return;
          setTodoMsg(e.target.value);
        }}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        onClick={() => {
          if (completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}

      <AlertDialog>
        <AlertDialogTrigger className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
          ❌
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              todo and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-600"
              onClick={removeTodo}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default TodoItem;
