import React from 'react'

const StyleEditor = (props) => {
  return (
    <div className="StyleEditor">
      <button tabIndex="-1" onMouseDown={props.onBoldClick}>B</button>
      <button tabIndex="-1" onMouseDown={props.onItalicClick}>I</button>
      <button tabIndex="-1" onMouseDown={props.onUnderLineClick}>U</button>
    </div>
  )
}

export default StyleEditor
