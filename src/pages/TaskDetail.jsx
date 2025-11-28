import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useUrl } from "../contexts/UrlContext";

/**Creare la pagina TaskDetail.jsx, che visualizza i dettagli di un task
 * 
Creare TaskDetail.jsx per mostrare:
Nome (title)
Descrizione (description)
Stato (status)
Data di creazione (createdAt)
Un bottone "Elimina Task", che per ora stampa solo "Elimino task" in console. */
function TaskDetail() {
  const { tasks } = useUrl();
  const { id } = useParams();
  const taskFind = tasks.find((t) => String(t.id) === id);
  if (taskFind) {
    return (
      <div className="col-8 m-5">
        <div className="row">
          <p>{taskFind.title}</p>
          <p>{taskFind.description}</p>
          <p>{taskFind.status}</p>
          <p>{taskFind.createdAt}</p>
          <button className="btn btn-warning col-4">Elimina Task</button>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
