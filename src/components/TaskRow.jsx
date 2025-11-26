import React from "react";
import { memo } from "react";
import { useUrl } from "../contexts/UrlContext";

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
  return (
    <>
      <tr>
        <th scope="row"></th>
        <td>{title}</td>
        <td className={check(status)}>{status}</td>
        <td>{createdAt}</td>
      </tr>
    </>
  );
});

export default TaskRow;
