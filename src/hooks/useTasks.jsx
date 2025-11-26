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

  function addTask(params) {}
  function removeTask(params) {}
  function updateTask(params) {}

  return { tasks, setTasks };
}

export default useTasks;
