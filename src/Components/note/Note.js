import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { deleteNote, noteIsDone, changeNote } from '../../Store/todoSlice';

import img from '../icons/recycling.svg';

const DeleteButton = styled.div`
  width: 37px;
  height: 37px;
  border: none;
  font-size: 18px;
  background-color: #fff3e0;
  background-image: url(${img});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 10px 10px;
  cursor: pointer;
  visibility: hidden;
`;
const Record = styled.div`
  display: flex;
  flex-direction: row;
  border-left: 1px solid #424242;
  border-right: 1px solid #424242;
  border-bottom: 1px solid #424242;
  font-size: 18px;
  background-color: #fff3e0;
  caret-color: transparent !important;
  justify-content: space-between;
  width: auto;
  &:hover ${DeleteButton} {
    visibility: visible;
  }
`;
const RecordNote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const NoteIsDone = styled.input`
  width: 28px;
  height: 28px;
  margin: 4px 3px 3px 3px;
  cursor: pointer;
`;
const TextOrEdit = styled.div`
  caret-color: transparent !important;
  width: auto;
`;
const Edit = styled.form`
  width: auto;
  height: 31px;
  background-color: #fff3e0;
  font-size: 18px;
  border: none;
  padding-top: 2px;
  outline: none;
  box-shadow: none;
`;
const EditField = styled.input`
  height: 90%;
  width: auto;
  font-size: 18px;
  background: none;
  outline: none;
  border: none;
  padding-left: 7px;
  padding-top: 2px;
  caret-color: #424242;
`;
const NoteText = styled.div`
  width: auto;
  min-height: 30px;
  height: auto;
  padding-top: 7px;
  padding-left: 7px;
  font-size: 18px;
  background-color: #fff3e0;
  border: none;
  caret-color: transparent !important;
  ${(props) => {
    switch (props.$mode) {
      case true:
        return `
          text-decoration: line-through;
          color: #bdbdbd;          
        `;
      default:
        return `
          text-decoration: none;
          color: #424242;  
        `;
    }
  }}
  &:hover ${DeleteButton} {
    visibility: visible;
  }
`;

function Note(props) {

  const [changingNote, setChangingNote] = useState(false); 
  const [text, setText] = useState('');

  const dispatch = useDispatch()

  const onDeleteNote = () => {
    dispatch(deleteNote(props.note.id))   
  }

  const onNoteIsDone = () => {
    dispatch(noteIsDone(props.note.id))  
  }

  function preparigChange() {    
    setText(props.note.text)
    setChangingNote(!changingNote);
  }

  function writingNewText(e) {
    setText(e.target.value);
  }

  function onChangeNote(e) {
    e.preventDefault()
    dispatch(changeNote({ id: props.note.id, text: text }));
    setChangingNote(!changingNote);
  }
  
  return (
    <Record >
      <RecordNote>
        <NoteIsDone
          type="checkbox"          
          onChange={onNoteIsDone}
          checked={props.note.isDone}/>
        <TextOrEdit>
          {changingNote ?
            <Edit            
              onSubmit={onChangeNote}>
              <EditField              
                value={text}
                onChange={writingNewText}/>
            </Edit>
          :
            <NoteText $mode= {props.note.isDone}            
              onDoubleClick={preparigChange}
            >{props.note.text}
            </NoteText>
          }
        </TextOrEdit>
      </RecordNote>
      <DeleteButton
        onClick={onDeleteNote}
      ></DeleteButton>
    </Record>
  )
}

export default Note