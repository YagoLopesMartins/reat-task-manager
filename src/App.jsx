import { useState } from "react";
import "./App.css";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task1",
      description: "task1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Task2",
      description: "task2",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Task3",
      description: "task3",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} />
        <AddTasks />
      </div>
    </div>
  );
}

export default App;
