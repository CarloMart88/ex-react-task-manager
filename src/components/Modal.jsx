/**Creare il componente Modal.jsx, che deve:
Accettare i seguenti props:
title: il titolo della modale.
content: il contenuto principale della modale.
show: stato booleano per mostrare o nascondere la modale.
onClose: funzione per chiudere la modale.
onConfirm: funzione eseguita al click del bottone di conferma.
confirmText (opzionale, default "Conferma"): testo del bottone di conferma.
Utilizzare ReactDOM.createPortal per rendere la modale indipendente dal flusso di rendering.
Implementare i pulsanti "Annulla" (chiude la modale) e "Conferma" (esegue onConfirm).

Integrare il componente Modal in TaskDetail.jsx per confermare l'eliminazione:
Quando l’utente clicca su "Elimina Task", deve aprirsi la modale di conferma.
Se l’utente conferma, vengono eseguite le stesse operazioni della Milestone 8. */
import React, { useState } from "react";
import { createPortal } from "react-dom";

function Modal({
  title = "titolo della modale",
  content = "questo è il contenuto della modale",
  show = false,
  onClose = () => {},
  onConfirm = () => {},
}) {
  return (
    show &&
    createPortal(
      <div className="modal-container">
        <div className="modal">
          <h2>{title}</h2>
          <p>{content}</p>
          <button className="btn btn-primary"></button>
        </div>
      </div>
    )
  );
}

export default Modal;
