import React, { useState } from 'react';

import Header from '../header/Header';
import List from '../list/List';
import InputField from '../inputField/InputField';

import styles from './Todolist.module.css';

function Todolist() {
  const [text, setText] = useState('');
  const [isDoneAll, setIsDoneAll] = useState(false);
  const [notes, setNotes] = useState([]);
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
  }

  function clickIsDone(id) {
    setNotes(notes =>
      notes.map((note) => note.id === id
        ? { ...note, isDone: !note.isDone }
        : { ...note }
      )
    );
  }

  function clickIsDoneAll() {    
    const newNotes = notes.map((note) => {
      const newNote = {
        ...note,
        isDone: !isDoneAll,
      };
      return newNote;
    })
    setNotes(newNotes)
    setIsDoneAll(!isDoneAll)
  }

  function deleteRecord(id) {
    let newNotes = notes.filter(item => item.id !== id)
    setNotes(newNotes);
  }

  function clearComplpleted() {
    let newNotes = notes.filter(item => !item.isDone)
    setNotes(newNotes);
  }

  function selected(choice) {
    setSelect(choice)
  }

  function changeNote(text, id) {
    setNotes(
      notes.map((note) => note.id === id
        ? { ...note, text: text }
        : { ...note }
      )
    );
  }

  const count = notes.filter(item => !item.isDone).length

  return (
    <div className={styles.todo__list}>
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
        changeNote={changeNote}
      />
    </div>
  )
};

export default Todolist;
