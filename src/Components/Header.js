import React from 'react';

import '../styles/header.css';

function Header(props) {
  return (
    <div className='control-panel'>
      <div className='count'>{props.count} items left</div>
      <div className='control-panel__buttons'>
        <div
          className='button'
          onClick={() => props.selected('all')}
        >All</div>
        <div
          className='button'
          onClick={() => props.selected('active')}
        >Active</div>
        <div
          className='button'
          onClick={() => props.selected('completed')}
        >Completed</div>
      </div>
      <div
        className='button'
        onClick={props.clearComplpleted}
      >
        Clear completed</div>
    </div>
  );
}

export default Header;