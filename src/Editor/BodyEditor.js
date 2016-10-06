import React, { Component } from 'react'
import './Index.css'
import { Editor, EditorState, RichUtils } from 'draft-js';

import StyleEditor from './StyleEditor'

class BodyEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty(), color: "grey"}
    this.onChange = this.onChange.bind(this)
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this.onBoldClick = this.onBoldClick.bind(this)
    this.onItalicClick = this.onItalicClick.bind(this)
    this.onUnderLineClick = this.onUnderLineClick.bind(this)
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this)
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

  toggleInlineStyle(inlineStyle) {
    // console.log(inlineStyle);
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    )
  }

  onBoldClick(e) {
    e.preventDefault()
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }

  onItalicClick(e) {
    e.preventDefault()
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
  }

  onUnderLineClick(e) {
    e.preventDefault()
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
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
    return (
      <div className="BodyEditor">
        <StyleEditor
          onBoldClick={this.onBoldClick}
          onItalicClick={this.onItalicClick}
          onUnderLineClick={this.onUnderLineClick}
        />
        <Editor
          editorState={this.state.editorState}
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
