import React from "react";
import { useUrl } from "../contexts/UrlContext";
import TaskRow from "../components/TaskRow";
// Milestone 3 - Lista dei Task (Pagina)
function TaskList() {
  //Recuperare la lista dei task dal GlobalContext e mostrarla nella pagina TaskList.jsx.
  const { tasks, setTasks } = useUrl();
  console.log(tasks);
  return (
    <div>
      {/**Strutturare TaskList.jsx come una tabella, con le intestazioni Nome, Stato, Data di Creazione. */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Stato</th>
            <th scope="col">Data di Creazione</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => {
            return <TaskRow key={t.id} t={t} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
