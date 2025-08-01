import React from 'react'
import "./TaskCard.css"
import deleteIcon from '../assets/delete.png'
import Tag from './Tag'

const TaskCard = ({title,tags}) => {
  console.log(title,tags)
  return (
    <article className='task_card'>
        <p className='task_text'>{title}</p>
        <div className='task_card_bottom_line'>
            <div className="task_card_tags">
                {
                 tags.map((tag, index) =>( <Tag key={index} tagName={tag}/>))
                }
            </div>
            <div className="task_delete">
                <img src={deleteIcon} className='delete_icon' alt="Error" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard