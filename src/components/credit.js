import React from 'react'

const Credit = (props) => (
  <div className="mike">{props.word} by <a href={props.link} target="_blank" rel="noopener noreferrer"> {props.name} </a></div>
)

export default Credit

