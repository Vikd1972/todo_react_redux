import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteNote, noteIsDone, changeNote } from '../../Store/todoSlice';

import { DeleteButton, Record, RecordNote, TextOrEdit } from './Note.styled'

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
        <input
          className='note-is-done'
          type="checkbox"          
          onChange={onNoteIsDone}
          checked={props.note.isDone}>
          </input>
        <TextOrEdit>
          {changingNote ?
            <form
              className='edit'  
              onSubmit={onChangeNote}>
              <input
                className='edit-field'  
                value={text}
                onChange={writingNewText}/>
            </form>
          :
            <div
              className={`${'note-text'} ${props.note.isDone ? 'record-is-done' : undefined}`}
              $mode={props.note.isDone}            
              onDoubleClick={preparigChange}
            >{props.note.text}
            </div>
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