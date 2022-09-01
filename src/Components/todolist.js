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

  function clickIsDone(id, action) {
    const newNotes = Object.assign([], notes);
    const i = newNotes.findIndex(item => item.id === id);    
    if (action === 'del') {
      newNotes.splice(i, 1);
      setNotes(newNotes);
    } else {
      newNotes[i].isDone = !newNotes[i].isDone;
      setNotes(newNotes);
    }
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
          onClick={(id, action) => clickIsDone(id, action)}          
          />
      </div>
    )  
};



export default Todolist;
