import React, { useMemo, useState } from "react";
import { useUrl } from "../contexts/UrlContext";
import TaskRow from "../components/TaskRow";
// Milestone 3 - Lista dei Task (Pagina)
function TaskList() {
  //Recuperare la lista dei task dal GlobalContext e mostrarla nella pagina TaskList.jsx.
  const { tasks, setTasks } = useUrl();
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => prev * -1);
    } else {
      setSortBy(field);
      setSortOrder(1);
    }
  };

  const sortedTask = useMemo(() => {
    return [...tasks].sort((a, b) => {
      let comparison;
      if (sortBy === "title") {
        comparison = a.title.localeCompare(b.title);
      } else if (sortBy === "status") {
        const Possibilty = ["To do", "Doing", "Done"];
        comparison =
          Possibilty.indexOf(a.status) - Possibilty.indexOf(b.status);
      } else if (sortBy === "createdAt") {
        const newDateA = new Date(a.createdAt).getTime();
        const newDateB = new Date(b.createdAt).getTime();
        comparison = newDateA - newDateB;
      }

      return comparison * sortOrder;
    });
  }, [sortBy, sortOrder, tasks]);

  return (
    <div>
      {/**Strutturare TaskList.jsx come una tabella, con le intestazioni Nome, Stato, Data di Creazione. */}
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort("title")}>Nome</th>
            <th onClick={() => handleSort("status")}>Stato</th>
            <th onClick={() => handleSort("createdAt")}>Data di Creazione</th>
          </tr>
        </thead>
        <tbody>
          {sortedTask.map((t) => {
            return <TaskRow key={t.id} t={t} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
