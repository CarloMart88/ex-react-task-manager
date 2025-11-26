import React from "react";
import { useUrl } from "../contexts/UrlContext";
// Milestone 3 - Lista dei Task (Pagina)
function TaskList() {
  //Recuperare la lista dei task dal GlobalContext e mostrarla nella pagina TaskList.jsx.
  const [tasks, setTasks] = useUrl();
  return (
    <div>
      {/**Strutturare TaskList.jsx come una tabella, con le intestazioni Nome, Stato, Data di Creazione. */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Stato</th>
            <th scope="col">Data di Creazione</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
