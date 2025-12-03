import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useUrl } from "../contexts/UrlContext";
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
  const { tasks, removeTask, updateTask } = useUrl();

  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const taskFind = tasks.find((t) => String(t.id) === String(id));

  const removeSubmit = async () => {
    try {
      await removeTask(id);
      alert("Task rimosso");
      navigate("/");
    } catch (err) {
      alert(err.message);
      throw new Error("errore nella rimozione del task" + err.message);
    }
  };

  if (taskFind) {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h1 className="card-title text-primary mb-4">
                  Dettaglio della task
                </h1>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item">
                    <strong>Titolo:</strong> {taskFind.title}
                  </li>
                  <li className="list-group-item">
                    <strong>Descrizione:</strong> {taskFind.description}
                  </li>
                  <li className="list-group-item">
                    <strong>Status:</strong>{" "}
                    <span
                      className={
                        taskFind.status === "Done"
                          ? "badge bg-success"
                          : taskFind.status === "Doing"
                          ? "badge bg-warning text-dark"
                          : "badge bg-secondary"
                      }
                    >
                      {taskFind.status}
                    </span>
                  </li>
                  <li className="list-group-item">
                    <strong>Creato in data:</strong>{" "}
                    {new Date(taskFind.createdAt).toLocaleDateString()}
                  </li>
                </ul>

                <div className="d-flex justify-content-start">
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => setShowModal(true)}
                  >
                    Elimina Task
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowEditTaskModal(true)}
                  >
                    Modifica
                  </button>
                </div>

                <Modal
                  title="Conferma eliminazione"
                  content="Sei sicuro di voler eliminare questo task?"
                  show={showModal}
                  onClose={() => setShowModal(false)}
                  onConfirm={async () => {
                    await removeSubmit();
                    setShowModal(false);
                  }}
                />

                <EditTaskModal
                  show={showEditTaskModal}
                  onClose={() => setShowEditTaskModal(false)}
                  task={taskFind}
                  onSave={async (newTask) => {
                    await updateTask(id, newTask);
                    alert("nuova task aggiornata");
                    setShowEditTaskModal(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
