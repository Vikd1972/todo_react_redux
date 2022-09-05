import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';

import styles from './List.module.css';

function List(props) {
  const [changingNote, setChangingNote] = useState(false);
  const [newText, setNewText] = useState('');

  function preparigChange(e, id) {
    console.log('once click ' + id)
    //setIdNote(id);

    if (e.detail === 2) {
      console.log('double click')
      //setIdNote(id);
      setChangingNote(!changingNote);
    }
  }


  return (

    <div >
      {props.value.map(note => (    
        <div className={(props.selected === 'active' && note.isDone === true) ||
          (props.selected === 'completed' && note.isDone === false)
          ? 'note-hidden' : undefined}
          key={note.id}
        >          
          <div  className='note'>           

            <input
              type="checkbox"
              className='is-done-all'
              onClick={() => props.onClickChange(note.id)}
              checked={note.isDone ? 'checked' : undefined}
            ></input>            
            
            <div className='text-or-edit'>              
              {!props.changingNote && props.idNote !== note.id ? 
                <div
                  className={note.isDone ? 'note__text is-done' : 'note__text'}
                  onClick={(e) => preparigChange(e, note.id) }
                >{note.text}</div>  
                : <form
                  className='edit'
                             >
                  <input
                    className='edit-field'
                    
                  ></input>
                </form>
              }    
            </div>            
            <button
              className='is-garbage'
              onClick={() => props.onClickDel(note.id)}
            ></button>
          </div>

          
          </div>
      ))}
        </div>
        
  )
}

export default List;