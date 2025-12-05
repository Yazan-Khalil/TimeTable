
function Task({time, task, id, removeTask}) {
    return (
        <div className="container">
            <div className="relative w-10/12 h-full">
                <button onClick={removeTask} 
                    className="absolute 
                                left-0 -translate-x-full
                                top-1/2 -translate-y-1/2
                                -mx-2.5
                                flex items-center justify-center
                                w-7 h-7
                                rounded-full
                                bg-red-500 text-white
                                shadow-sm
                                hover:bg-red-600 hover:shadow-md
                                transition
                ">
                    <span className="w-3 h-1 bg-white rounded-full mt-0.5" />
                </button>
                <div className={`container w-full h-full 
                        ${id % 2 == 1? "bg-linear-to-r from-cyan-400 via-sky-500 to-blue-400": 
                            "bg-linear-to-r from-sky-500 to-blue-600"}`}>
                    <div className={`container task-time flex-1 border-2 border-r-0 h-full
                                    ${id > 0? "border-t-0": ""}
                    `}>{time}</div>
                    <div className={`container task-name flex-9 border-2 h-full
                                    ${id > 0? "border-t-0": ""}
                    `}>{task}</div>
                </div>
            </div>
        </div>
    );
}

export default Task;    