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
  return (
    <div className="container">
        <Header />
        { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks to show' }
    </div>
  );
}

export default App;
