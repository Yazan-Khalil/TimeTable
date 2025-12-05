import { useState } from "react";
import { useEffect } from "react";
import MainPage from "./MainPage";
import SideBar from "./SideBar";

function App() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved? JSON.parse(saved): [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    function addTask(time, task) {
        setTasks(prev => [...prev, {time:time, task:task}].sort((a, b) => a.time.localeCompare(b.time)));
    }

    function removeTask(id) {
        setTasks(prev => prev.filter((task, index) => index !== id));
    }

    return <div className="flex w-screen h-screen border-collapse bg-scroll">
        <MainPage tasks={tasks} removeTask={removeTask} />
        <SideBar addTask={addTask} />
    </div>
}

export default App;