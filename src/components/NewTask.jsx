import { useState } from "react";
import Button from "./Button";

function NewTask({ onAdd, projectId }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleAddTask() {
    if (enteredTask.trim() === "") return;

    onAdd(enteredTask, projectId);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4 mt-4">
      <input
        type="text"
        value={enteredTask}
        onChange={(e) => setEnteredTask(e.target.value)}
        className="flex-1 p-2 bg-gray-300 rounded-md outline-none"
        placeholder="New task..."
      />

      <Button onClick={handleAddTask}>
        Add Task
      </Button>
    </div>
  );
}

export default NewTask;
