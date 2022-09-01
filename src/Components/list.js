import React from 'react';
//import ReactDOM from 'react-dom/client';


import '../styles/list.css';

function List(props) {
  return (
    
    <div >
      {props.value.map(note => (
          
        <div key={note.id} className='note'>          
          <input
            type="checkbox"
            className='note__isdone'
            onClick={() => props.onClick(note.id, 'change')}
            cheked={note.isDone}            
          ></input>
          <div className={note.isDone ? 'note__text is-done' : 'note__text'}>
            {note.text}
          </div>
          <button
            className='is-garbage'
            onClick={() => props.onClick(note.id, 'del')}
          ></button>
        </div>
      ))}
    </div>
  )
}

export default List;