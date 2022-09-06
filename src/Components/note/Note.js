import React, { useState } from 'react';

import styles from './Note.module.css';

function Note(props) {

  const [changingNote, setChangingNote] = useState(false); 
  const [newText, setNewText] = useState('');

  function preparigChange(id) {    
    setNewText(props.note.text)
    setChangingNote(!changingNote);
  }

  function writingNewText(e) {
    setNewText(e.target.value);
  }

  function changeNewText() {
    props.changeNote(newText, props.note.id);
    setChangingNote(!changingNote);
  }

  const isFiltered = !((props.selectedFilter === 'active' && props.note.isDone) ||
    (props.selectedFilter === 'completed' && !props.note.isDone));
  return (
    <div className={isFiltered ? styles.note : styles.note_hidden}>
      <div className={styles.note__rec}>
      <input
        type="checkbox"
        className={styles.note__isdone}
        onChange={() => props.onClickChange(props.note.id)}
        checked={props.note.isDone}
      ></input>
      <div className={styles.text_or_edit}>
        {changingNote ?
          <form
            className={styles.edit}
            onSubmit={changeNewText}
          >
            <input
              className={styles.edit_field}
              value={newText}
              onChange={writingNewText}
            ></input>
          </form>
          :
          <div
            className={props.note.isDone ? [styles.note__is_done] : styles.note__text}
            onDoubleClick={() => preparigChange(props.note.id)}
          >{props.note.text}</div>
        }
      </div>
      </div>
      <button
        className={styles.is_garbage}
        onClick={() => props.onClickDel(props.note.id)}
      ></button>
    </div>
  )
}

export default Note