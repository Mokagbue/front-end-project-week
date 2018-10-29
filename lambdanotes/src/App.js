import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import Notes from './components/Notes';

class App extends Component {
  render() {
    console.log("App render Working?", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <div>
            <ul className="navigation">
              <li className='navButtons'>
                <NavLink exact to="/" activeClassName="activeNavButton">
                  Home
                </NavLink>
              </li>
              <li className='navButtons'>
                <NavLink exact to="/notes" activeClassName="activeNavButton">
                  Notes
                </NavLink>
              </li>
              <li className='navButtons'>
                <NavLink exact to="/notesform" activeClassName="activeNavButton">
                  Add New Notes
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
        <Route 
          exact path="/" c
          omponent={Home} 
        />
        <Route 
          exact path="/notes"
          component={NotesList}
        />
        <Route 
          path="/notes/:noteId"
          component={Notes}
          />
        <Route 
          path="/notesform"
          component={NotesForm}
        />
      </div>
    );
  }
}

 export default (App);

//  componentDidMount() {
//   this.getNotes();
// }

// getNotes = () => {
//   axios.get('https://killer-notes.herokuapp.com/note/get/all')
//   .then(response => {
//     this.setState({ notes: response.data });
//   })
//   .catch(err => console.log(err));
// }


// handleChange = event => {
//   this.setState({ note: {...this.state.note, [event.target.name]: event.target.value}});
//   };

// handleAddNewNote = event => { 
//   event.preventDefault();
//   console.log("We've got a new note here!");
//   axios.post('https://killer-notes.herokuapp.com/note/create', this.state.note)
//   .then(response => this.setState({ note: response.data }))
// }

// handleDeleteNote = noteId => {
//   axios.delete(`https://killer-notes.herokuapp.com/note/delete/id/${noteId}`)
//   .then(response => this.getNotes());
// }

// goToUpdateNoteForm = note => {
//   console.log("going to update note form!", note);
//   this.setState({ note, updatingNote: true })
//   this.props.history.push('/notesform')
// }


















