import React from "react";
import TastForm from "./Components/TastForm/TastForm";
import TaskList from "./Components/TaskList/TaskList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Task Planner</h1>
      <TastForm />
      <TaskList />
    </div>
  );
}

export default App;