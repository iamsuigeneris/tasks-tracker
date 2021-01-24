import { useState } from 'react'
import Task from './Task'

const Tasks = () => {

    const [ tasks, setTasks ] = useState([
        {
            id:1,
            text:'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id:2,
            text:'Meeting at School',
            day: 'Jan 15th at 2:00pm',
            reminder: true
        },
        {
            id:3,
            text:'Food Shopping',
            day: 'June 12th at 6:30pm',
            reminder: false
        }
    ])
    return (
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task} />
            ))}
        </>
    )
}

export default Tasks
