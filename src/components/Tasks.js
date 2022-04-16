import { Task } from "./Task"

export const Tasks = ( { tasks, onDelete, onToggle }) => {

  return (

    // setTask(...Tasks, {<new task})

    <>
        {
            tasks.map((task) => (
                <Task key={task.id} task={task} onDelete = { onDelete } onToggle = {onToggle} >
                  {task.text}
                </Task>
            ))
        }
    </>
  )
}
