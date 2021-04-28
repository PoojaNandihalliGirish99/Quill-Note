import React from 'react';
import './App.css';
import firebase from 'firebase';
import SidebarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor';



class App extends React.Component{

  constructor(){
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
  };
  }

  render() {
    return(
      <div className="app-container">
      <SidebarComponent 
      selectedNoteIndex={this.state.selectedNoteIndex}
      notes = {this.state.notes}
      deleteNote = {this.deleteNote}
      selectNote = {this.selectNote}
      newNote = {this.newNote}>
      </SidebarComponent>
      {
        this.state.selectedNote ? 
        <EditorComponent selectedNote = {this.state.selectedNote}
      selectedNoteIndex= {this.state.selectedNoteIndex}
      notes = {this.state.notes}></EditorComponent> :
      null
      }
    </div>
    );
  }

  //hook - component didMount: this gets called when app component is mounted
  componentDidMount = () => {
    firebase.firestore().collection('notes').onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map(_doc => {
        const data = _doc.data();
        data['id'] = _doc.id;
        return data;
      });
      console.log(notes);
      this.setState({notes: notes});
    });
  }

  selectNote = (note, index) => this.setState({selectedNoteIndex: index, selectNote: note});


}

export default App;
