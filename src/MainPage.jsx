import Task from "./components/Task";

function MainPage({tasks, removeTask}) {
    return <div className="container main-contnet bg-sky-300 bg-scroll flex-3 flex flex-col justify-start">
            <h1 className="mb-8 mt-2">Timetable</h1>
            {tasks.map((taskItem, taskId) => 
                <Task time={taskItem.time} task={taskItem.task} removeTask={() => removeTask(taskId)}
            />)}
        </div>
}

export default MainPage;