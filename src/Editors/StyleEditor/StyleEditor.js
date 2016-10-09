import React, { PropTypes } from 'react'
import './index.css'

const StyleEditor = (props) => {
  return (
    <div className="StyleEditor">
      {props.children}
    </div>
  )
}

StyleEditor.propTypes = {
  onBoldClick: PropTypes.func,
  onItalicClick: PropTypes.func,
  onUnderLineClick: PropTypes.func
}

export default StyleEditor
