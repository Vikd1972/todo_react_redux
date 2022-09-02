import React, { useState } from 'react';

import Header from './Header';

import List from './List';
import InputField from './InputField';
import '../styles/todolist.css';

function Todolist(props) {
  const [text, setText] = useState('');
  const [isDoneAll, setIsDoneAll] = useState(true);
  const [notes, setNotes] = useState([]);
  const [count, setCount] = useState(0);
  const [select, setSelect] = useState('all');

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
    setNotes([...notes, newNote]);
    setText('');
    setCount(count + 1);
  }

  function clickIsDone(id) {
    const newNotes = [...notes];
    const i = newNotes.findIndex(item => item.id === id);
    newNotes[i].isDone = !newNotes[i].isDone;
    setNotes(newNotes);    
    setCount(newNotes.filter(item => item.isDone === false).length); 
  }

  function clickIsDoneAll() {    
    setIsDoneAll(!isDoneAll)
    const newNotes = [...notes];
    newNotes.map(item => item.isDone = isDoneAll);    
    setNotes(newNotes);
    setCount(newNotes.filter(item => item.isDone === false).length); 
  }

  function deleteRecord(id) {
    let newNotes = [...notes];    
    newNotes = newNotes.filter(item => item.id !== id)
    setNotes(newNotes);
    setCount(newNotes.filter(item => item.isDone === false).length); 
  }

  function clearComplpleted() {
    let newNotes = [...notes];
    newNotes = newNotes.filter(item => item.isDone === false)
    setNotes(newNotes);
  }

  function selected(choice) {
    setSelect(choice)
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
        <Header 
          count={count}
          clearComplpleted={clearComplpleted}
          selected={selected}
        />
        <InputField 
          value={text}
          isDoneAll={isDoneAll}          
          onChange={writingText}
          onSubmit={addRecord}
          onIsDoneAll={clickIsDoneAll}
        />
        <List
          value={notes} 
          selected={select}
          onClickChange={clickIsDone} 
          onClickDel={deleteRecord}           
          />
      </div>
    )  
};



export default Todolist;
