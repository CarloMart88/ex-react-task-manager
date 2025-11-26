import React from "react";
import { useUrl } from "../contexts/UrlContext";
function TaskRow() {
  //Creare un componente TaskRow.jsx, che rappresenta una singola riga della tabella e mostra solo le proprietà title, status e createdAt (escludendo description).
  return (
    <>
      <tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </>
  );
}

export default TaskRow;
