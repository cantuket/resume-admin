import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';

class RichTextMarkdown extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value === '' ? RichTextEditor.createEmptyValue() : RichTextEditor.createValueFromString(this.props.value, 'html'),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value.toString('html')) {
      this.setState({
        value: nextProps.value ?
          RichTextEditor.createValueFromString(nextProps.value, 'html') :
          RichTextEditor.createEmptyValue()
      })
    }
  }

  onChange = (value) => {
    console.log(this.props);
    this.setState({ value })
    this.props.onChange(value.toString('html'))
  }

  render() {
    return (
      <RichTextEditor value={this.state.value} onChange={this.onChange} />
    );
  }
}

export default RichTextMarkdown;


// import React, {Component} from 'react'
// import { convertFromRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import {Field } from 'redux-form'

// const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

// class RichTextField extends Component {
//     constructor(props) {
//         super(props);
//         const contentState = convertFromRaw(content);
//         this.state = {
//           contentState,
//         }
//       }
    
//       onContentStateChange: Function = (contentState) => {
//         console.log(this);
//         this.setState({
//           contentState,
//         });
//       };
//       render(){
//         return (
//             <div>
//                 <Editor
//                     wrapperClassName="demo-wrapper"
//                     editorClassName="demo-editor"
//                     onContentStateChange={this.onContentStateChange}
//                 />
//                 <Field component="input" type="hidden" value={this.state.contentState} name={this.props.name} />
//             </div>
//         );
//       }
// }

// export default RichTextField