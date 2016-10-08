import React from 'react'
import StyleButton from '../StyleButton'

var INLINE_STYLES = [
  {label: '⌘ B', style: 'BOLD'},
  {label: '⌘ I', style: 'ITALIC'},
  {label: '⌘ U', style: 'UNDERLINE'}
];

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div className="StyleEditor__controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  )
}

export default InlineStyleControls
