import React from 'react'
import "../Components/Tag.css"
const Tag = ({tagName,SelectTag,Selected}) => {
  const TagStyle = {
    HTML: {backgroundColor : '#fda821'},
    CSS: {backgroundColor : '#15d4c6'},
    JavaScript: {backgroundColor : '#ffd12c'},
    React: {backgroundColor : '#4cdafc'},
    default : {backgroundColor:'#f9f9f9'},
  }
  return (
        <button type='button' className='tag' style={Selected ? TagStyle[tagName] : TagStyle.default} onClick={()=>{
          SelectTag(tagName)
        }}>{tagName}</button>
  )
}

export default Tag