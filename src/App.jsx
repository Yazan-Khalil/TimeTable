import Task from "./components/Task";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([{time:"09:00 - 10:00", task:"CP"}]);

    function addTask(time, task) {
        setTasks(prev => [...prev, {time:time, task:task}]);
    }

    return <div className="flex w-screen h-screen border-collapse bg-scroll">
        <div className="container main-contnet bg-sky-300 bg-scroll flex-3 flex flex-col justify-start">
            <h1 className="mb-8 mt-2">Timetable</h1>
            {tasks.map(taskItem => 
                <Task time={taskItem.time} task={taskItem.task} 
            />)}
        </div>
        <div className="container flex-col gap-8 sidebar bg-amber-500 flex-1">
            <label for="time-in">
                <p>Time:</p>
                <input id="time-in" className="text"/>
            </label>
            <label for="task-in">
                <p>Task:</p>
                <input id="task-in" className="text"/>
            </label>
            <button className="bg-emerald-600 rounded-lg p-2"
                    onClick={() => addTask(document.getElementById("time-in").value, 
                                        document.getElementById("task-in").value)}>
            Add Task </button>
        </div>
    </div>
}

export default App;