import NewTask from "./NewTask.jsx";

function Tasks({ tasks, onAdd, onDelete, projectId }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks</h2>

      <NewTask onAdd={onAdd} projectId={projectId} />

      {tasks.length === 0 && (
        <p className="text-stone-400 mt-4">
          This project does not have any tasks yet.
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="mt-4 space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-stone-200 p-2 rounded-md"
            >
              <span>{task.text}</span>

              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-500 hover:text-stone-800"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
