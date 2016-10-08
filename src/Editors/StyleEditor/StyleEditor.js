import React, { PropTypes } from 'react'
import styles from './index.css'

const StyleEditor = (props) => {
  return (
    <div className="StyleEditor">
      <button tabIndex="-1" onMouseDown={props.onBoldClick}>⌘ B</button>
      <button tabIndex="-1" onMouseDown={props.onItalicClick}>⌘ I</button>
      <button tabIndex="-1" onMouseDown={props.onUnderLineClick}>⌘ U</button>
    </div>
  )
}

StyleEditor.propTypes = {
  onBoldClick: PropTypes.func,
  onItalicClick: PropTypes.func,
  onUnderLineClick: PropTypes.func
}

export default StyleEditor
