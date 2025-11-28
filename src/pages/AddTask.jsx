import React, { useRef, useState } from "react";
import useTasks from "../hooks/useTasks";
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
  const { addTask } = useTasks();

  const handleSubtmit = async (e) => {
    e.preventDefault();
    const inputGroup = [
      textRef.current.value,
      selectRef.current.value,
      newTasks,
    ];
    if (inputGroup.some((i) => i === "")) {
      //Il campo non può essere vuoto.
      return alert("alcuni campi sono vuoti ");
    } else {
      console.log("hai stampato", inputGroup);
    }

    const newTask = {
      title: newTasks,
      description: textRef.current.value,
      status: selectRef.current.value,
    };

    try {
      const result = await addTask(newTask);
      return result;
    } catch (err) {
      console.log(err);
    }
    //faccio il reset dei parametri
    setNewTasks("");
    textRef.current.value = "";
    selectRef.current.value = "To do";
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubtmit}>
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
            <button className="btn btn-primary my-2">Aggiungi il task</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTask;
