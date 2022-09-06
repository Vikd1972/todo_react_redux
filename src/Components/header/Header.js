import React from 'react';

import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.control_panel}>
      <div className={styles.count}>{props.count} items left</div>
      <div className={styles.control_panel__buttons}>
        <div
          className={`${styles.button} ${props.select === 'all' ? styles.illumination : undefined}`}
          onClick={() => props.selected('all')}
        >All</div>
        <div
          className={`${styles.button} ${props.select === 'active' ? styles.illumination : undefined}`}
          onClick={() => props.selected('active')}
        >Active</div>
        <div
          className={`${styles.button} ${props.select === 'completed' ? styles.illumination : undefined}`}
          onClick={() => props.selected('completed')}
        >Completed</div>
      </div>
      <div
        className={`${styles.button} ${styles.clear} ${props.clearBtn ? styles.hidden_clear : undefined}`}
        onClick={props.clearComplpleted}
      >
        Clear completed</div>
    </div>
  );
}

export default Header;