import { useRef } from "react";
import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";

function NewProject({ onAddProject, onCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef();

  function handleSave() {
    if (
      title.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      date.current.value.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      name: title.current.value,
      description: description.current.value,
      dueDate: date.current.value,
    });
  }

  return (
    <div className="flex w-full min-h-screen flex-col p-10">
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700">Invalid Input</h2>
        <p>Looks like you forgot to fill out a field.</p>
      </Modal>

      <div className="flex justify-end gap-4 mb-6">
        <Button
          className="bg-transparent text-stone-600 hover:bg-stone-200"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button onClick={handleSave}>Save</Button>
      </div>

      <form className="flex flex-col space-y-4">
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" />
        <Input ref={date} type="date" label="Date" />
      </form>
    </div>
  );
}

export default NewProject;
