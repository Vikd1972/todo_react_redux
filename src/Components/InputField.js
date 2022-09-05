import React from 'react';

import styles from './InputField.module.css';

function InputField(props) {
return (
  <div>
    <form onSubmit={props.onSubmit} className='input-form'>
      <input
        type="checkbox"
        className='is-done-all'       
        checked={!props.isDoneAll ? 'checked' : undefined}
        onClick={props.onIsDoneAll}
        placeholder="What needs to be done?"
      ></input>
      <input
        className='input-field'          
          onChange={props.onChange}
          value={props.value}
      />
    </form>
  </div>
  )
}

export default InputField;