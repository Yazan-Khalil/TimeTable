import Task from "./components/Task";

function MainPage({tasks, removeTask}) {
    return <div className="container main-contnet bg-scroll flex-3 flex flex-col justify-start
                            bg-linear-to-br from-rose-200 via-orange-100 to-amber-200">
            <h1 className="mb-10 mt-4">Timetable</h1>
            {tasks.map((taskItem, taskIdx) => 
                <Task key={taskIdx} time={taskItem.time} task={taskItem.task} id={taskIdx} 
                    removeTask={() => removeTask(taskIdx)}
            />)}
        </div>
}

export default MainPage;