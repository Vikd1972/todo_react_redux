import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { addNewNote, allIsDone } from '../../Store/todoSlice';

const InputForm = styled.form`
  width: auto;  
  height: 37px;
  color: #424242;
  font-size: 18px;
  background-color: #fff3e0;
  border: 1px solid #424242;
  display: flex;
  flex-direction: row;
`;
const IsDoneAll = styled.input`
  width: 30px;
  height: 30px;
  margin: 3px;
  cursor: pointer;
`;
const InputText = styled.input`
  background-color: #fff3e0;
  width: 100%;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 7px;
`;

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
  <InputForm onSubmit={onSaveNewNote}>
    <IsDoneAll
        type="checkbox"    
        checked={isDoneAll}
        onChange={onAllIsDone}          
    ></IsDoneAll>
    <InputText
        value={text}
        onChange={onTextChanged}
        placeholder='What needs to be done?'
    ></InputText>
  </InputForm>
  
  )
}

export default InputField;