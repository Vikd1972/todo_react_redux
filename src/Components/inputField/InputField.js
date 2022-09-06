import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addNewNote } from '../todoSlice/todoSlice';

import styles from './InputField.module.css';

function InputField(props) {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onTextChanged = e => setText(e.target.value)

  const onSaveNewNote = (e) => {   
    e.preventDefault()
    if (!text.trim()) {
      return
    }
    console.log(text)
    dispatch(
      addNewNote({
        id: nanoid(),
        text,
        isDone: false,
      })
    )
    setText('')    
  }

return (  
  <form onSubmit={onSaveNewNote} className={styles.input_form}>
      <input
        type="checkbox"
        className={styles.is_done_all}       
        checked={props.isDoneAll}
        onChange={props.onIsDoneAll}  
        
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