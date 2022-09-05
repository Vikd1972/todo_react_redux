import React from 'react';

import styles from './InputField.module.css';

function InputField(props) {
return (
  
    <form onSubmit={props.onSubmit} className={styles.input_form}>
      <input
        type="checkbox"
        className={styles.is_done_all}       
        checked={props.isDoneAll}
        onChange={props.onIsDoneAll}        
        placeholder="What needs to be done?"
      ></input>
      <input
        className={styles.input_field}
          onChange={props.onChange}
          value={props.value}
      />
    </form>
  
  )
}

export default InputField;