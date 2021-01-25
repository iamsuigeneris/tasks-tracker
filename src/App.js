import {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
      id:1,
      text:'Doctors Appointment',
      day: 'Jan 12th 2020',
      reminder: true
    },
    {
      id:2,
      text:'Go for Meeting',
      day: 'April 11th 2020',
      reminder: true
    },
    {
      id:3,
      text:'Play Football',
      day: 'Feb 12th 2020',
      reminder: false
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }
  return (
    <div className="container">
        <Header />
        { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show' }
    </div>
  );
}

export default App;
