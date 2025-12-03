import React, { useMemo, useState, useCallback } from "react";
import { useUrl } from "../contexts/UrlContext";
import TaskRow from "../components/TaskRow";

// Milestone 3 - Lista dei Task (Pagina)
function TaskList() {
  //Recuperare la lista dei task dal GlobalContext e mostrarla nella pagina TaskList.jsx.
  const { tasks } = useUrl();
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
    return [...tasks]
      .filter((t) => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
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
  }, [searchQuery, sortBy, sortOrder, tasks]);

  const debounceSortedTask = useCallback(debounce(setSearchQuery, 500), []);

  return (
    <div className="container mt-4">
      {/**Strutturare TaskList.jsx come una tabella, con le intestazioni Nome, Stato, Data di Creazione. */}
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Cerca per nome..."
            onChange={(e) => debounceSortedTask(e.target.value)}
          />
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-3 text-primary">Lista dei Task</h4>
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th
                  scope="col"
                  className="cursor-pointer"
                  onClick={() => handleSort("title")}
                >
                  Nome
                </th>
                <th
                  scope="col"
                  className="cursor-pointer"
                  onClick={() => handleSort("status")}
                >
                  Stato
                </th>
                <th
                  scope="col"
                  className="cursor-pointer"
                  onClick={() => handleSort("createdAt")}
                >
                  Data di Creazione
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedTask.map((t) => {
                return <TaskRow key={t.id} t={t} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
