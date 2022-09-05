import React from 'react';

import Note from '../note/Note';

import styles from "./List.module.css"

function List(props) {
  return (
    <div className={styles.list}>
      {props.value.map(note => (
        <div key={note.id}>          
          <Note 
            note={note}
            onClickChange={props.onClickChange} 
            onClickDel={props.onClickDel} 
            changeNote={props.changeNote}
            selected={props.selected}
          />
          </div>
      ))}
        </div>
        
  )
}

export default List;