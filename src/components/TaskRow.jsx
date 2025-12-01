import React from "react";
import { memo } from "react";
import { useUrl } from "../contexts/UrlContext";
import { NavLink } from "react-router-dom";

//faccio una funzione per un check sugli stati
function check(status) {
  if (status === "To do") {
    return "bg-danger";
  } else if (status === "Doing") {
    return "bg-warning";
  } else {
    return "bg-success";
  }
}
//wrappo tutto con memo che prendo da react
const TaskRow = memo(({ t }) => {
  //Creare un componente TaskRow.jsx, che rappresenta una singola riga della tabella e mostra solo le proprietà title, status e createdAt (escludendo description).
  const { title, status, createdAt, id } = t;
  /**Aggiornare TaskRow.jsx
  Rendere il title un link a /task/:id, in modo che cliccando sul nome del task si venga reindirizzati alla pagina di dettaglio. */
  return (
    <>
      <tr>
        <td>
          <NavLink to={`task/${id}`}>{title}</NavLink>
        </td>
        <td className={check(status)}>{status}</td>
        <td>{new Date(createdAt).toLocaleDateString()}</td>
      </tr>
    </>
  );
});

export default TaskRow;
