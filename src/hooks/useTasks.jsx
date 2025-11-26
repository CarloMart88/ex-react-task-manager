import React from "react";
import { useState, useEffect } from "react";
function useTasks() {
  //riporto la logica del provider
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

export default useTasks;
