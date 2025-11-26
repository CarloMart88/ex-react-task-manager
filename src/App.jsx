import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import DefaultLayout from "./Layout/DefaultLayout";
/**Definiamo due pagine principali:

Lista dei Task (TaskList.jsx) → mostrerà l'elenco dei task.
Aggiungi Task (AddTask.jsx) → conterrà il form per aggiungere un nuovo task. */
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/TaskList" element={<TaskList />}></Route>
            <Route path="/AddTask" element={<AddTask />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    /**Definire le rotte con Routes e Route, associando ogni percorso alla rispettiva pagina. */
  );
}

export default App;
