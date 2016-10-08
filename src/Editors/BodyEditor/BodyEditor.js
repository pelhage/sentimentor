import React, { Component } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js';

import StyleEditor from '../StyleEditor'
import InlineStyleControls from '../InlineStyleControls'
import BlockStyleControls from '../BlockStyleControls'
import './index.css'
// Custom overrides for "code" style.

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

class BodyEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty(), color: "grey"}
    this.onChange = this.onChange.bind(this)
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this)
    this.toggleBlockType = this.toggleBlockType.bind(this)
  }

  componentDidMount() {
    this.refs.editor.focus()
  }

  onChange(editorState) {
    let words = editorState.getCurrentContent().getPlainText()
    this.setState({editorState}, () => {
      this.props.changeBG(words)
    })
  }

  toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    )
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  render() {
    const { editorState } = this.state
    return (
      <div className="BodyEditor">
        <StyleEditor>
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
        </StyleEditor>
        <Editor
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          handleReturn={this.handleKeyPress}
          placeholder="Tell me about your thoughts, feelings, or day"
          ref="editor"
        />
      </div>
    );
  }
}

export default BodyEditor
