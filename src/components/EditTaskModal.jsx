import React, { useRef, useState } from "react";
import Modal from "./Modal";

function EditTaskModal({ show, onClose, task, onSave }) {
  const [title, setTitle] = useState(task.title);
  const [status, setStatus] = useState(task.status);
  const [description, setDescription] = useState(task.description);

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
      title="Modifica task"
      confirmText="Salva"
      onConfirm={() => editFormRef.current.requestSubmit()}
      onClose={onClose}
      show={show}
      content={
        <form onSubmit={handleSubmit} ref={editFormRef}>
          {/* Titolo */}
          <div className="mb-3">
            <label className="form-label">Titolo</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Descrizione */}
          <div className="mb-3">
            <label className="form-label">Descrizione</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Stato */}
          <div className="mb-3">
            <label className="form-label">Stato</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </form>
      }
    />
  );
}

export default EditTaskModal;
