import React from 'react'
import Todo from "../assets/direct-hit.png"
import "../Components/TaskColume.css"
import TaskCard from './TaskCard'

const TaskColume = ({title,icon}) => {
  return (
    <section className='task_column'>
        <h2 className='task_column_heading'>
            <img src={icon} alt="image Error" className='task_column_icon' /> 
            {title}
        </h2>
        <TaskCard/>
    </section>
  )
}

export default TaskColume