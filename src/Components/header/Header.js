import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { clearCompleted, selectShowFiltered } from '../../Store/todoSlice';

import {ControlPanel, ControlPanelButton} from './Header.styled'

function Header() {
  const showFiltered = useSelector(state => state.todo.showFiltered)
  const notes = useSelector(state => state.todo.notes)
  const count = notes.filter(note => !note.isDone).length
  const clearBtn = notes.filter(note => note.isDone).length === 0

  const dispatch = useDispatch()

  return (
    <ControlPanel>
      <div className='count'>
        {count} items left
      </div>
      <ControlPanelButton>
        <div
          className={`${'button'} ${showFiltered === 'all' ? 'button-show' : undefined}`}
          onClick={() => dispatch(selectShowFiltered('all'))}
        >All</div>
        <div
          className={`${'button'} ${showFiltered === 'active' ? 'button-show' : undefined}`}
          onClick={() => dispatch(selectShowFiltered('active'))}
        >Active</div>
        <div
          className={`${'button'} ${showFiltered === 'completed' ? 'button-show' : undefined}`}
          onClick={() => dispatch(selectShowFiltered('completed'))}
        >Completed</div>      
      </ControlPanelButton>
      <div        
        className={`${'button'} ${clearBtn ? 'button-clear' : undefined}`}
        onClick={() => dispatch(clearCompleted())}>
        Clear completed
      </div>
    </ControlPanel>
  );
}

export default Header;