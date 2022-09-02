import React from 'react';

import '../styles/header.css';

function Header(props) {
  function select(choice) {   
    props.selected(choice);
  }

  return (
    <div className='control-panel'>
      <div className='count'>{props.count} items left</div>
      <div className='control-panel__buttons'>
        <div
          className='button'
          onClick={() => select('all')}
        >All</div>
        <div
          className='button'
          onClick={() => select('active')}
        >Active</div>
        <div
          className='button'
          onClick={() => select('completed')}
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