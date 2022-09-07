import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteNote, noteIsDone, changeNote } from '../../Store/todoSlice';

import styles from './Note.module.css';

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
    <div className={styles.note}>
      <div className={styles.note__rec}>
      <input
        type="checkbox"
        className={styles.note__isdone}
        onChange={onNoteIsDone}
        checked={props.note.isDone}
      ></input>
      <div className={styles.text_or_edit}>
        {changingNote ?
          <form
            className={styles.edit}
            onSubmit={onChangeNote}
          >
            <input
              className={styles.edit_field}
              value={text}
              onChange={writingNewText}
            ></input>
          </form>
          :
          <div
            className={props.note.isDone ? [styles.note__is_done] : styles.note__text}
            onDoubleClick={preparigChange}
          >{props.note.text}</div>
        }
      </div>
      </div>
      <button
        className={styles.is_garbage}
        onClick={onDeleteNote}
      ></button>
    </div>
  )
}

export default Note