import { createContext, useContext, useEffect, useState } from "react";
const baseUrl = process.env.REACT_APP_URL;
//Creare un Context API (GlobalContext) per gestire lo stato globale dell'applicazione.
const UrlContext = createContext();

function UrlProvider({ children }) {
  const [tasks, setTasks] = useState([]);

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
