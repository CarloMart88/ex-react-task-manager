import React, { useMemo, useState } from "react";
import { useUrl } from "../contexts/UrlContext";
import TaskRow from "../components/TaskRow";
// Milestone 3 - Lista dei Task (Pagina)
function TaskList() {
  //Recuperare la lista dei task dal GlobalContext e mostrarla nella pagina TaskList.jsx.
  const { tasks, setTasks } = useUrl();
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  // creo una funzione di debounce
  function debounce(callback, delay) {
    let timer;
    return (value) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(value);
      }, delay);
    };
  }

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => prev * -1);
    } else {
      setSortBy(field);
      setSortOrder(1);
    }
    console.log("questo è il valore di", sortBy);
  };

  const sortedTask = useMemo(() => {
    if (searchQuery === "") {
      return tasks;
    } else {
      return tasks.filter((t) =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  }, [searchQuery, sortBy, sortOrder, tasks]);

  return (
    <div>
      {/**Strutturare TaskList.jsx come una tabella, con le intestazioni Nome, Stato, Data di Creazione. */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
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
