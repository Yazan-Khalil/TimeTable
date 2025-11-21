import Task from "./components/Task";

function MainPage({tasks}) {
    return <div className="container main-contnet bg-sky-300 bg-scroll flex-3 flex flex-col justify-start">
            <h1 className="mb-8 mt-2">Timetable</h1>
            {tasks.map(taskItem => 
                <Task time={taskItem.time} task={taskItem.task} 
            />)}
        </div>
}

export default MainPage;