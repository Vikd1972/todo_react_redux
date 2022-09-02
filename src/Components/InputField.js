import React from 'react';

import '../styles/inputField.css';

function InputField(props) {
return (
  <div>
    <form onSubmit={props.onSubmit} className='input-form'>
      <input
        type="checkbox"
        className='is-done-all'        
        cheked={props.isDoneAll}
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