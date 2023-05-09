import Task from "./Task"
const Tasks = ( { tasks, onDelete, onToggle } ) => {


    return (
        <>
            {tasks.map((task) => 
            (<Task key={task.id}   //using Task component and initializing prop 'task' with the task from the list loop
                task = {task} onDelete = {onDelete} onToggle = {onToggle}/>     
            ))}
        </>
    )
}

export default Tasks
