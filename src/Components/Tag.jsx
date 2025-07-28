import React from 'react'
import "../Components/Tag.css"
const Tag = ({tagName}) => {
  return (
        <button className='tag'>{tagName}</button>
  )
}

export default Tag