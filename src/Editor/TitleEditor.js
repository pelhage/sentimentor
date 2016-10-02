import React, { Component } from 'react'
import './Index.css'
import { Editor, EditorState } from 'draft-js';

class TitleEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty(), color: "grey"};
    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  onChange(editorState) {
    this.setState({editorState})
  }

  handleKeyPress(e) {
    return true
  }

  render() {
    return (
      <h1 className="TitleEditor">
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleReturn={this.handleKeyPress}
          placeholder='Add a post title'
        />
      </h1>
    );
  }
}

export default TitleEditor
