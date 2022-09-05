import React, { useState } from 'react';

import Header from './Header';
import List from './List';
import InputField from './InputField';

import styles from './Todolist.module.css';

function Todolist(props) {
  const [text, setText] = useState('');
  const [isDoneAll, setIsDoneAll] = useState(true);  
  const [idNote, setIdNote] = useState(0);
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
   
      //setIdNote(id);
  
    if (e.detail === 2) {  
      console.log('double click')
      //setIdNote(id);
      setChangingNote(!changingNote);
      const newNotes = [...notes];
      const i = newNotes.findIndex(item => item.id === id);
      console.log(i)
      console.log(newNotes[i].text)
      setNewText(newNotes[i].text);
    }    
  }  
  

  function submitChange() {    
    console.log('submit')
    setIdNote(0);
    setChangingNote(!changingNote);
    const newNotes = [...notes];
    const i = newNotes.findIndex(item => item.id === idNote);
    //setNotes(newNotes);
    //setIdNote('')
    
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
          idNote={idNote}
          onClickChange={clickIsDone} 
          onClickDel={deleteRecord}       
          
          />
      </div>
    )  
};



export default Todolist;
