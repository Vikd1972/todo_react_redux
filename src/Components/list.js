import React from 'react';
//import ReactDOM from 'react-dom/client';


import '../styles/list.css';

function List(props) {

  //const notes = props.value;
  return (
    
    <div >
      {props.value.map(note => (
          
        <div key={note.id} className='note'>
          
          <input
            type="checkbox"
            className='note__isdone'
            onClick={() => props.onClick(note.id)}
            cheked={note.isDone}
            
          ></input>
          <div className={note.isDone ? 'note__text is_done' : 'note__text'}>
            {note.text}
          </div>
        </div>
      ))}
    </div>
  )
}

export default List;