import React from 'react';

import Note from '../note/Note';

function List(props) {
  return (
    <div >
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