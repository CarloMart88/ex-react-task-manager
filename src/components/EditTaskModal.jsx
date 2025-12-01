/**Creare il componente EditTaskModal.jsx:

Deve accettare i seguenti props:
show (boolean): determina se la modale è visibile.
onClose (function): funzione per chiudere la modale.
task (object): oggetto che rappresenta il task da modificare.
onSave (function): funzione che viene chiamata al salvataggio con il task aggiornato. */
import React, { useRef, useState } from "react";
import Modal from "./Modal";

function EditTaskModal({ show, onClose, task, onSave }) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [status, setStatus] = useState(task?.status || "To do");

  const editFormRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...task,
      title,
      description,
      status,
    });
  };

  return (
    <Modal
      title="Modifica Task"
      show={show}
      onClose={onClose}
      confirmText="Salva"
      onConfirm={() => editFormRef.current.requestSubmit()}
      content={
        <form ref={editFormRef} onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </form>
      }
    />
  );
}

export default EditTaskModal;
