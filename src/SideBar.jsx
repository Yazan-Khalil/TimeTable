import { useState } from "react";

function SideBar ({addTask}) {

    const [error, setError] = useState(false);
    const [timeIn, setTimeIn] = useState("");
    const [taskIn, setTaskIn] = useState("");

    function onChangeTimeIn() {
        setTimeIn(document.getElementById("time-in").value);
    }

    function onChangeTaskIn() {
        setTaskIn(document.getElementById("task-in").value);
    }

    function toAddTask() {
        const time = document.getElementById("time-in").value;
        const task = document.getElementById("task-in").value;
        if(!time || !task)
            setError(true);
        else {
            addTask(time, task);
            setTimeIn("");
            setTaskIn("");
        }
    }

    return <div className="container flex-col gap-8 sideba flex-1
                bg-linear-to-b from-orange-400 via-orange-500 to-amber-500">
            <label htmlFor="time-in" className="container flex-col w-full">
                <p className="w-4/5 text-left">Time:</p>
                <input id="time-in" className="text" onFocus={() => setError(false)} 
                    onChange={() => onChangeTimeIn()} value={timeIn}
                />
            </label>

            <label htmlFor="task-in" className="container flex-col w-full">
                <p className="w-4/5 text-left">Task:</p>
                <input id="task-in" className="text" onFocus={() => setError(false)}
                     onChange={() => onChangeTaskIn()} value={taskIn}
                />
            </label>

            <button className="button bg-emerald-600 hover:bg-emerald-700 text-white"
                    onClick={() => toAddTask()}>
            Add Task </button>

            <p className={`error ${error? "opacity-100": "opacity-0"}`}>
                Please specify both time and task
            </p>
        </div>
}   

export default SideBar;