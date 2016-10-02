import React, { Component } from 'react'
import './Index.css'
import { Editor, EditorState, RichUtils } from 'draft-js';

class BodyEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {editorState: EditorState.createEmpty(), color: "grey"}
    this.onChange = this.onChange.bind(this)
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this.onBoldClick = this.onBoldClick.bind(this)
    this.onItalicClick = this.onItalicClick.bind(this)
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this)
  }

  componentDidMount() {
    console.log('Going to focus onto editor')
    console.log('Draft editor', this.refs.editor)
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
    console.log('Hello');
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  onItalicClick(e) {
    e.preventDefault()
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
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
        <button onMouseDown={this.onBoldClick}>B</button>
        <button onMouseDown={this.onItalicClick}>I</button>
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
