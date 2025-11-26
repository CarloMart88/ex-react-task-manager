import { createContext, useContext, useEffect, useState } from "react";
//Creare un Context API (GlobalContext) per gestire lo stato globale dell'applicazione.
const UrlContext = createContext();

function UrlProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {}, []);
}
