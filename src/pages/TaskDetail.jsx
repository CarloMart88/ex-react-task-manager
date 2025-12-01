import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useUrl } from "../contexts/UrlContext";
import useTasks from "../hooks/useTasks";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";

/**Gestire l'eliminazione della task in TaskDetail.jsx:
Al click su "Elimina Task", chiamare removeTask passando l'id del task.
Se la funzione esegue correttamente l'operazione:
Mostrare un alert di conferma dell’avvenuta eliminazione.
Reindirizzare l’utente alla lista dei task (/).
Se la funzione lancia un errore:
Mostrare un alert con il messaggio di errore ricevuto. */

function TaskDetail() {
  const { tasks } = useUrl();
  const { removeTask, updateTask } = useTasks();
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const taskFind = tasks.find((t) => String(t.id) === String(id));
  const removeSubmit = async (e) => {
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
          <p>Titolo: {taskFind.title}</p>
          <p>Descrizione: {taskFind.description}</p>
          <p>Status: {taskFind.status}</p>
          <p>Creato in data: {taskFind.createdAt}</p>
          <button
            className="btn btn-warning col-3 m-1"
            onClick={() => setShowModal(true)}
          >
            Elimina Task
          </button>
          <Modal
            title="Conferma eliminazione"
            content="Sei sicuro di voler eliminare questo task?"
            show={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            onConfirm={async () => {
              await removeSubmit();
              setShowModal(false);
            }}
          />
          <button
            className="btn btn-primary col-3 m-1"
            onClick={() => setShowEditTaskModal(true)}
          >
            Modifica
          </button>
          <EditTaskModal
            show={showEditTaskModal}
            onClose={() => setShowEditTaskModal(false)}
            task={taskFind}
            onSave={(newTask) => {
              updateTask(id, newTask);
              alert("nuova task aggiornata");
              setShowEditTaskModal(false);
            }}
          />
        </div>
      </div>
    );
  }
}

export default TaskDetail;
