import React, { useState } from 'react';

import Header from './header';
import List from './list';

import '../styles/todolist.css';

function Todolist(props) {
  /*constructor(props) {
    super(props);
    this.state = {
      notes: [],
      text: '',
    };
    this.writingText = this.writingText.bind(this);
    this.addRecord = this.addRecord.bind(this);
    this.clickIsDone = this.clickIsDone.bind(this);
  }*/

  const [text, setText] = useState('');
  const [newText, setNewText] = useState('');
  const [notes, setNotes] = useState([]);

  function writingText(e) {
    setText(e.target.value);
  }

  function addRecord(e) {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newNote = {
      text: text,
      isDone: false,
      id: Date.now()
    };
    setNotes(notes.concat(newNote));
    setText('');
  }

  function clickIsDone(e, id, action) {
    const newNotes = Object.assign([], notes);
    const i = newNotes.findIndex(item => item.id === id);
    if (action === 'del') {
      console.log('delete record')
      newNotes.splice(i, 1);
      setNotes(newNotes);
    } else {
      console.log('note is done')
      newNotes[i].isDone = !newNotes[i].isDone;
      setNotes(newNotes);
    }
  }

  function changeRecord(e, id) {    
    const newNotes = Object.assign([], notes);
    const i = newNotes.findIndex(item => item.id === id);  
    
    setNewText(newNotes[i].text)
    setNewText(e.target.value);
    console.log('change record, index: ' + i + ', newRext: ' + newText)
  }

  function submitChangeRecord(e, id) {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newNotes = Object.assign([], notes);
    const i = newNotes.findIndex(item => item.id === id);  
    newNotes[i].text = text;   
    setNotes(newNotes);
    setText('');
  }



    return (
      <div className="todo__list">
        <Header />
        <form onSubmit={(event) => addRecord(event)}>
          <input
            id='input_field'
            onChange={(event) => writingText(event)}            
            value={text}            
          />
        </form>
        <List
          value={notes} 
          onClick={(e, id, action) => clickIsDone(e, id, action)} 
          onChange={(event, id) => changeRecord(event, id)}
          onSubmit={(e, id) => submitChangeRecord(e, id)}
          />
      </div>
    )  
};



export default Todolist;
