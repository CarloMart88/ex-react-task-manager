import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/TaskList" element={<TaskList />}></Route>
          <Route path="/AddTask" element={<AddTask />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
