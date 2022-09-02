import React, { useState } from 'react';

import Header from './Header';

import List from './List';
import InputField from './InputField';
import '../styles/todolist.css';

function Todolist(props) {
  const [text, setText] = useState('');
  const [isDoneAll, setIsDoneAll] = useState(true);
  const [notes, setNotes] = useState([]);

  function writingText(e) {
    setText(e.target.value);
  }

  function addRecord(e) {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    const newNote = {
      text: text,
      isDone: false,
      id: Date.now()
    };
    console.log(text)
    setNotes([...notes, newNote]);
    setText('');
  }

  function clickIsDone(id) {
    const newNotes = [...notes];
    const i = newNotes.findIndex(item => item.id === id);
    newNotes[i].isDone = !newNotes[i].isDone;
    setNotes(newNotes);    
  }

  function clickIsDoneAll() {    
    setIsDoneAll(!isDoneAll)
    const newNotes = [...notes];
    newNotes.map(item => item.isDone = isDoneAll);
    
    setNotes(newNotes);
  }

  function deleteRecord(id) {
    let newNotes = [...notes];     
    setNotes(newNotes.filter(item => item.id !== id));
  }
/*
  function preparigChange(e, id) {
    const newNotes = Object.assign([], notes);
    const i = newNotes.findIndex(item => item.id === id);  
    setNewText(newNotes[i].text);
  }

  function changeRecord(e, id) {    
    const newNotes = Object.assign([], notes);
    const i = newNotes.findIndex(item => item.id === id);      
    setNewText(newNotes[i].text) // asdas
    setNewText(e.target.value); // ''
    console.log('change record, index: ' + i + ', newRext: ' + newText)
  }

  function submitChangeRecord(e, id) {    
    e.preventDefault();
    if (newText.length === 0) {
      return;
    }
    const newNotes = Object.assign([], notes);
    const i = newNotes.findIndex(item => item.id === id);  
    console.log('submit editing for: ' + 1)
    newNotes[i].text = newText;   
    console.log('submit editing, new text: ' + newNotes[i].text)
    setNotes(newNotes);
    setNewText('');
  }*/


    return (
      <div className="todo__list">
        <Header />
        <InputField 
          value={text}
          isDoneAll={isDoneAll}
          onChange={writingText}
          onSubmit={addRecord}
          onIsDoneAll={clickIsDoneAll}
        />
        <List
          value={notes} 
          onClickChange={(id) => clickIsDone(id)} 
          onClickDel={(id) => deleteRecord(id)}           
          />
      </div>
    )  
};



export default Todolist;
