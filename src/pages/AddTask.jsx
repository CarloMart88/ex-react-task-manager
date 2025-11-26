import React, { useRef, useState } from "react";
/**Aggiornare la pagina AddTask.jsx per contenere un form con i seguenti campi:

Nome del task (title) → Input controllato (useState).
Descrizione (description) → Textarea non controllata (useRef).
Stato (status) → Select non controllata (useRef), con opzioni "To do", "Doing", "Done", e valore predefinito "To do". */
function AddTask() {
  const [newTasks, setNewTasks] = useState("");
  const textRef = useRef();
  const selectRef = useRef();
  return (
    <>
      <div className="container">
        <div className="row">
          <form>
            <div className="mb-3">
              {/**Nome del task (title) → Input controllato (useState). */}
              <label className="form-label">Nome del task</label>
              <input
                type="text"
                className="form-control"
                placeholder="Scrivi qui..."
                value={newTasks}
                onChange={(e) => setNewTasks(e.target.value)}
              />
              {/**Descrizione (description) → Textarea non controllata (useRef). */}
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  ref={textRef}
                ></textarea>
                <label htmlFor="floatingTextarea">Descrizione</label>
              </div>
              {/**Stato (status) → Select non controllata (useRef), con opzioni "To do", "Doing", "Done", e valore predefinito "To do". */}
            </div>
            <select
              className="form-select"
              ref={selectRef}
              defaultValue={"To do"}
            >
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTask;
