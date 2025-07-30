import {useState} from 'react'
import "../src/App.css"
import TaskForm from './Components/TaskForm'
import TaskColume from './Components/TaskColume'
import TodoIcon from './assets/direct-hit.png'
import DoingIcon from './assets/glowing-star.png'
import DoneIcon from './assets/check-mark-button.png'
const App = () => {
  return (
    <div className='app'>
      <TaskForm/>
      <main className='app_main'>
        <TaskColume title="To Do" icon={TodoIcon}/>
        <TaskColume title="Doing" icon={DoingIcon}/>
        <TaskColume title="Done" icon={DoneIcon}/>
      </main>
    </div>
  )
}

export default App