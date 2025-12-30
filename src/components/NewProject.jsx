import { useRef } from "react";
import Modal from "./Modal";

function NewProject() {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef();

  console.log(date, description, title);

  function handleSave() {
    const formTitle = title.current.value;
    const formDescription = description.current.value;
    const formDate = date.current.value;

    if (
      formTitle.trim() === "" ||
      formDescription.trim() === "" ||
      formDate.trim() === ""
    ) {
      // show the modal
      modal.current.open();
      return;
    }

    // the parent function that sends for data.
    console.log("add the form data", formTitle, formDate, formDescription);
  }

  return (
    <div className="flex w-full min-h-screen flex-col p-10">
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700">Invalid Input</h2>
        <p>Looks like you forgot to fill out a field.</p>
      </Modal>
      <div className="flex justify-end space-x-4">
        <button button="button">Cancle</button>
        <button
          onClick={() => handleSave()}
          button="button"
          className="bg-stone-700 text-white p-2 rounded-md"
        >
          save
        </button>
      </div>
      <form className="flex flex-col space-y-4">
        <label htmlFor="title" className="flex font-sans font-bold flex-col">
          Title
          <input
            type="text"
            ref={title}
            id="title"
            className="p-3 bg-gray-300 font-normal outline-none border-b-black border"
          />
        </label>

        <label
          className="flex font-sans font-bold flex-col"
          htmlFor="description"
        >
          Description
          <input
            type="text"
            className="p-3 bg-gray-300 font-normal outline-none border-b-black border"
            ref={description}
            id="description"
          />
        </label>

        <label className="flex font-sans font-bold flex-col" htmlFor="date">
          Date
          <input
            type="date"
            ref={date}
            id="date"
            className="p-3 bg-gray-300 font-normal outline-none border-b-black border"
          />
        </label>
      </form>
    </div>
  );
}

export default NewProject;
