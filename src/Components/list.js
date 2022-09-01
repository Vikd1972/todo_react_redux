import React from 'react';
//import ReactDOM from 'react-dom/client';


import '../styles/list.css';

function List(props) {
  return (
    
    <div >
      {props.value.map(note => (
          <div>
        <div key={note.id} className='note'>          
          <input
            type="checkbox"
            className='note__isdone'
            onClick={(e) => props.onClick(e, note.id, 'done')}
            cheked={note.isDone}            
          ></input>
            <div
              className={note.isDone ? 'note__text is-done' : 'note__text'}   
            >{note.text}</div>
          <button
            className='is-garbage'
            onClick={(e) => props.onClick(e, note.id, 'del')}
          ></button>
          </div>    
          <input
            className='edit'
            onChange={(e) => props.onChange(e, note.id)}
            value={note.text}
          ></input>
        </div>
      ))}
    </div>
  )
}

export default List;