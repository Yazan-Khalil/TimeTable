import { useState } from "react";
import MainPage from "./MainPage";
import SideBar from "./SideBar";

function App() {
    const [tasks, setTasks] = useState([{time:"09:00 - 10:00", task:"CP"}]);

    function addTask(time, task) {
        setTasks(prev => [...prev, {time:time, task:task}]);
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