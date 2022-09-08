import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { addNewNote, allIsDone } from '../../Store/todoSlice';

import { InputForm } from './InputField.styled'

function InputField() {
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
  <InputForm onSubmit={onSaveNewNote}>
    <input
      className='is-done-all' 
      type="checkbox"    
      checked={isDoneAll}
      onChange={onAllIsDone}          
    ></input>
    <input
      className='input-text'
      value={text}
      onChange={onTextChanged}
      placeholder='What needs to be done?'
    ></input>
  </InputForm>  
  )
}

export default InputField;