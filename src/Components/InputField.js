import React from 'react';

import '../styles/inputField.css';

function InputField(props) {
  console.log(props.text)
return (
  <div>
    <form onSubmit={props.onSubmit} className='input-form'>
      <input
        type="checkbox"
        className='is-done-all'        
        cheked={props.isDoneAll}
        onClick={props.onIsDoneAll}
      ></input>
      <input
        className='input-field'          
          onChange={(e) => props.onChange(e)}
          value={props.value}
      />
    </form>
  </div>
  )
}

export default InputField;