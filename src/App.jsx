import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import DefaultLayout from "./Layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import TaskDetail from "./pages/TaskDetail";
import { UrlProvider } from "./contexts/UrlContext";

/**Definiamo due pagine principali:

Lista dei Task (TaskList.jsx) → mostrerà l'elenco dei task.
Aggiungi Task (AddTask.jsx) → conterrà il form per aggiungere un nuovo task. */
function App() {
  return (
    <>
      <BrowserRouter>
        <UrlProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/task" element={<TaskList />}></Route>
              <Route path="/task/:id" element={<TaskDetail />}></Route>
              <Route path="/AddTask" element={<AddTask />}></Route>
            </Route>
          </Routes>
        </UrlProvider>
      </BrowserRouter>
    </>
    /**Definire le rotte con Routes e Route, associando ogni percorso alla rispettiva pagina. */
  );
}

export default App;
