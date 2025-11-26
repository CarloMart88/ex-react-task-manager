import { createContext, useContext, useEffect, useState } from "react";
const baseUrl = import.meta.env.VITE_API_URL;
//Creare un Context API (GlobalContext) per gestire lo stato globale dell'applicazione.
const UrlContext = createContext();

function UrlProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  //Effettuare una richiesta GET a /tasks al caricamento dell'app, utilizzando useEffect, e salvare i dati nello stato.
  useEffect(() => {
    fetch(`${baseUrl}/tasks`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
}
