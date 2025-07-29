import React from 'react'
import Tag from './Tag'
import './TaskCard.css'
import deleteIcon from '../assets/delete.png'

const TaskCard = () => {
  return (
    <article className='task_Card'>
        <p className='Task_Text'>this is simple text</p>
        <div className='task_card_botton_line'>
            <div className='task_card_tags'>
                <Tag tagName="HTML"/>
                <Tag tagName="CSS"/>
                <Tag tagName="Javascript"/>
                <Tag tagName="React"/>
            </div>
            <div className='Task_delete'>
                <img src={deleteIcon} className='delete_icon' alt="" />
            </div>
        </div>

    </article>
  )
}

export default TaskCard