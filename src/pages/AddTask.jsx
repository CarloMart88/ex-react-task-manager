import React, { useRef, useState } from "react";
/**Validare il campo Nome (title):

Il campo non può essere vuoto.
Non può contenere simboli speciali.
Se il valore è errato, mostrare un messaggio di errore.
Utilizzare una costante con i caratteri vietati: */
function AddTask() {
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";
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
              {newTasks.length > 0 &&
              newTasks.split("").some((char) => symbols.includes(char)) ? (
                <p className="text-danger">
                  Non puoi inserire simboli speciali
                </p>
              ) : (
                <p className="text-success">inserisci il nome del task</p>
              )}
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
