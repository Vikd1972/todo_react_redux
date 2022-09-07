import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { addNewNote, allIsDone } from '../../Store/todoSlice';

import styles from './InputField.module.css';

function InputField(props) {
  const [text, setText] = useState('')

  const isDoneAll = useSelector(state => state.todo.isDoneAll)

  const dispatch = useDispatch()

  const onTextChanged = e => setText(e.target.value)

  const onSaveNewNote = (e) => {   
    e.preventDefault()
    if (!text.trim()) {
      return
    }
    dispatch(
      addNewNote({
        id: nanoid(),
        text,
        isDone: false,
      })
    )
    setText('')    
  }

  const onAllIsDone = () => {
    dispatch(allIsDone())
  }

return (  
  <form onSubmit={onSaveNewNote} className={styles.input_form}>
      <input
        type="checkbox"
        className={styles.is_done_all}       
        checked={isDoneAll}
        onChange={onAllIsDone}  
        
      ></input>
      <input
        className={styles.input_field}
        value={text}
        onChange={onTextChanged}
        placeholder='What needs to be done?'
      />
    </form>
  
  )
}

export default InputField;