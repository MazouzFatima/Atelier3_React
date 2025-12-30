import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      // The parent calls this
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-6 rounded-md shadow-md fixed inset-0 z-50"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button className="px-4 py-2 bg-stone-700 text-stone-200 hover:bg-stone-600 rounded-md">
          Close
        </button>
      </form>
    </dialog>
  );
});

export default Modal;
