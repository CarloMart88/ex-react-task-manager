import { createContext, useContext, useEffect, useState } from "react";
import useTasks from "../hooks/useTasks";
import AddTask from "../pages/AddTask";
const baseUrl = import.meta.env.VITE_API_URL;
//Creare un Context API (GlobalContext) per gestire lo stato globale dell'applicazione.
const UrlContext = createContext();

function UrlProvider({ children }) {
  //Integrare useTasks() nel GlobalContext, in modo che tutti i componenti possano accedere ai task e alle funzioni di gestione
  const { tasks, setTasks, addTask } = useTasks();
  //Effettuare una richiesta GET a /tasks al caricamento dell'app, utilizzando useEffect, e salvare i dati nello stato.

  return (
    <UrlContext.Provider value={{ tasks, setTasks, addTask }}>
      {children}
    </UrlContext.Provider>
  );
}

function useUrl() {
  const context = useContext(UrlContext);
  return context;
}

export { UrlProvider, useUrl };
