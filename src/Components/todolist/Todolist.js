import React, { useState } from 'react';

import Header from '../header/Header';
import List from '../list/List';
import InputField from '../inputField/InputField';

import styles from './Todolist.module.css';

function Todolist() {
  const [text, setText] = useState('');
  const [isDoneAll, setIsDoneAll] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectFilter, setSelectFilter] = useState('all');

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
      notes.map((note) => {
        if (note.id !== id) {
          return note
        }
        return {
          ...note,
          isDone: !note.isDone,
        }
      }
      )
    );
  }

  function clickIsDoneAll() {
    const newNotes = [...notes]
    newNotes.forEach((note) => { note.isDone = !isDoneAll });
    setNotes(newNotes)
    setIsDoneAll(!isDoneAll)
  }

  function deleteRecord(id) {
    const newNotes = notes.filter(item => item.id !== id)
    setNotes(newNotes);
  }

  function clearComplpleted() {
    let newNotes = notes.filter(item => !item.isDone)
    setNotes(newNotes);
  }

  function selectedFilter(choice) {
    setSelectFilter(choice)
  }

  function changeNote(text, id) {
    setNotes(notes =>
      notes.map((note) => {
        if (note.id !== id) {
          return note
        }
        return {
          ...note,
          text: text,
        }
      }
      )
    );
  }

  const count = notes.filter(item => !item.isDone).length
  const clearBtn = notes.filter(item => item.isDone).length === 0

  return (
    <div className={styles.todo__list}>
      <Header
        count={count}
        clearComplpleted={clearComplpleted}
        selectFilter={selectFilter}
        clearBtn={clearBtn}
        selectedFilter={selectedFilter}
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
        selectedFilter={selectFilter}
        onClickChange={clickIsDone}
        onClickDel={deleteRecord}
        changeNote={changeNote}
      />
    </div>
  )
};

export default Todolist;
