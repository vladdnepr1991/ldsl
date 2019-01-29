import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import 'draft-js/dist/Draft.css'


export default class Create extends React.Component {
    constructor(props) {
      super(props);
      this.state = {editorState: EditorState.createEmpty()};
      this.onChange = (editorState) => this.setState({editorState});
      this.handleKeyCommand = this.handleKeyCommand.bind(this);
      // this.logState = () => console.log(this.state.editorState.toJS());
      // this.setDomEditorRef = ref => this.domEditor = ref;
    }
    handleKeyCommand(command, editorState) {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return 'handled';
      }
      return 'not-handled';
    }    

    _onBoldClick() {
      this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
            
    // componentDidMount(){
    //   this.domEditor.focus()
    // }
    render () {
      return (
          <div className="d-flex flex-grow-1">
              <div className="page-section w-100">
                  <div className="container ">
                      <div className="row">
                          <div className="col">
                              <p> <Link to="/admin"> {"<"} Back to admin panel</Link> </p>

                              <h1>New Project</h1>

                              <div>
                                <Form>
                                  <FormGroup>
                                    <Label for="article-title">Title:</Label>
                                    <Input type="text" id="article-title" placeholder="Article name" />
                                  </FormGroup>
                                </Form>
                              </div>

                              <button onClick={this._onBoldClick.bind(this)}>Bold</button>

                              <Editor
                                editorState={this.state.editorState}
                                handleKeyCommand={this.handleKeyCommand}
                                onChange={this.onChange}
                                placeholder="Enter some text..."
                                
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
    };
}