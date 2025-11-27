import React from "react";
import { useState, useEffect } from "react";
const baseUrl = import.meta.env.VITE_API_URL;
function useTasks() {
  //riporto la logica del provider
  const [tasks, setTasks] = useState([]);
  //Creare un hook useTasks() che recupera i task iniziali con una richiesta GET a /tasks e li memorizza in uno stato locale (useState)
  useEffect(() => {
    fetch(`${baseUrl}/tasks`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
  /** La funzione deve ricevere un oggetto contenente le proprietà title, description e status.

Effettuare una chiamata API POST /tasks, inviando l’oggetto come body in formato JSON.

La chiamata API restituisce un oggetto con la seguente struttura:

In caso di successo:{ success: true, task:  la task creata  }
In caso di errore: { success: false, message: "Messaggio di errore" }
La funzione addTask deve controllare il valore di success nella risposta:

Modificare la gestione del Submit del Form in AddTask.jsx:
Eseguire la funzione addTask di useTasks(), passando l’oggetto con title, description e status.
Se la funzione esegue correttamente l'operazione:
Mostrare un alert di conferma dell’avvenuta creazione della task.
Resettare il form.
Se la funzione lancia un errore:
Mostrare un alert con il messaggio di errore ricevut */
  async function addTask(newTask) {
    let success;
    newTask = {
      title: newTask.title,
      description: newTask.description,
      status: newTask.status,
    };
    const response = await fetch(`${baseUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    }).catch((err) => {
      console.error({ success: false, message: "Messaggio di errore:", err });
      alert(`Errore: ${err}`);
    });

    const data = await response.json();
    if (data) {
      console.log({ success: true, task: data }),
        alert("creazione del task avvenuta");
    }
    /**Se success è true, aggiornare lo stato globale aggiungendo la nuova task.
Se success è false, lanciare un errore con message come testo. */
    if (success === true) {
      return setTasks([...tasks, data]);
    } else {
      return tasks;
    }
  }
  function removeTask(params) {}
  function updateTask(params) {}

  return { tasks, setTasks, addTask };
}

export default useTasks;
