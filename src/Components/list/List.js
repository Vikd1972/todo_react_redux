import React from 'react';
import { useSelector } from 'react-redux';

import Note from '../note/Note';

import styles from "./List.module.css"

function List(props) {
  const notes = useSelector(state => state.todo)
  return (
    <div className={styles.list}>
      {notes.map(note => (
        <div key={note.id}>          
          <Note 
            note={note}
            onClickChange={props.onClickChange} 
            onClickDel={props.onClickDel} 
            changeNote={props.changeNote}
            selectedFilter={props.selectedFilter}
          />
          </div>
      ))}
        </div>
        
  )
}

export default List;