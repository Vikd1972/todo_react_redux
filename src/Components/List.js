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
              className='is-done-all'
              onClick={(e) => props.onClickChange(note.id)}
              checked={note.isDone ? 'checked' : undefined}
            ></input>
            <div
              className={note.isDone ? 'note__text is-done' : 'note__text'}
            >{note.text}</div>
            <button
              className='is-garbage'
              onClick={(e) => props.onClickDel(note.id)}
            ></button>
          </div>

        </div>
      ))}
    </div>
  )
}

//<form onSubmit={(e) => props.onSubmit(e, note.id)}>
//  <input
//    className='edit'
//    onChange={(e) => props.onChange(e, note.id)}
//    onFocus={(e) => props.onFocus(e, note.id)}
//    value={newText}
//  ></input>
//</form> 

export default List;