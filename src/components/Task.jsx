
function Task({time, task}) {
    return (
        <div className="container task flex w-10/12 not-first:border-t-0">
            <div className="container task-time flex-1 border-2 border-r-0 h-full ">{time}</div>
            <div className="container task-name flex-9 border-2 h-full ">{task}</div>
        </div>
    );
}

export default Task;    