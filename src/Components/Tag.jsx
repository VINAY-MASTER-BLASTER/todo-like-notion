import React from 'react'
import "./Tag.css"

export const Tag = ({tagName}) => {
  return (
    <button className="tag">{tagName}</button>
  )
}
