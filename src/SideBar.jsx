import { useState } from "react";

function SideBar ({addTask}) {

    const [error, setError] = useState(false);

    function toAddTask() {
        const time = document.getElementById("time-in").value;
        const task = document.getElementById("task-in").value;
        if(!time || !task)
            setError(true);
        else
            addTask(time, task);
    }

    return <div className="container flex-col gap-8 sidebar bg-amber-500 flex-1">
            <label for="time-in" className="w-full">
                <p>Time:</p>
                <input id="time-in" className="text" onFocus={() => setError(false)}/>
            </label>

            <label for="task-in" className="w-full">
                <p>Task:</p>
                <input id="task-in" className="text" onFocus={() => setError(false)}/>
            </label>

            <button className="bg-emerald-600"
                    onClick={() => toAddTask()}>
            Add Task </button>

            {error && <p className="error">
                Please specify both time and task
            </p>}
        </div>
}   

export default SideBar;