import React from "react";
import { useUrl } from "../contexts/UrlContext";
function TaskRow({ t }) {
  //Creare un componente TaskRow.jsx, che rappresenta una singola riga della tabella e mostra solo le proprietà title, status e createdAt (escludendo description).
  const { title, status, createdAt, id } = t;
  return (
    <>
      <tr>
        <th scope="row"> {id} </th>
        <td>{title}</td>
        <td>{status}</td>
        <td>{createdAt}</td>
      </tr>
    </>
  );
}

export default TaskRow;
