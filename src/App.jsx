import React from 'react'
import "./App.css"
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
const App = () => {
  return (
    <div className='app'>
      <TaskForm/>
       <main className="app_main">
        <TaskColumn title="Todo" icon={todoIcon}/>
        <TaskColumn title="Done" icon={doingIcon}/>
        <TaskColumn title="Doing" icon={doneIcon}/>
       </main>
    </div>
  )
}

export default App