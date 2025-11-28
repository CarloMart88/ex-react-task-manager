import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useUrl } from "../contexts/UrlContext";
import useTasks from "../hooks/useTasks";
import { useNavigate } from "react-router-dom";

/**Gestire l'eliminazione della task in TaskDetail.jsx:
Al click su "Elimina Task", chiamare removeTask passando l'id del task.
Se la funzione esegue correttamente l'operazione:
Mostrare un alert di conferma dell’avvenuta eliminazione.
Reindirizzare l’utente alla lista dei task (/).
Se la funzione lancia un errore:
Mostrare un alert con il messaggio di errore ricevuto. */

function TaskDetail() {
  const { tasks } = useUrl();
  const { removeTask } = useTasks();
  const { id } = useParams();
  const navigate = useNavigate();

  const taskFind = tasks.find((t) => String(t.id) === String(id));
  const removeSubmit = async (e) => {
    e.preventDefault();
    try {
      await removeTask(id);
      alert("Task rimosso");
      navigate("/task");
    } catch (err) {
      alert(err.message);
      throw new Error("errore nella rimozione del task" + err.message);
    }
  };

  if (taskFind) {
    return (
      <div className="col-8 m-5">
        <div className="row">
          <p>{taskFind.title}</p>
          <p>{taskFind.description}</p>
          <p>{taskFind.status}</p>
          <p>{taskFind.createdAt}</p>
          <button className="btn btn-warning col-4" onClick={removeSubmit}>
            Elimina Task
          </button>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
