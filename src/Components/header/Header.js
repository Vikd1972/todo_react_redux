import React from 'react';

import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.control_panel}>
      <div className={styles.count}>{props.count} items left</div>
      <div className={styles.control_panel__buttons}>
        <div
          className={styles.button}
          onClick={() => props.selected('all')}
        >All</div>
        <div
          className={styles.button}
          onClick={() => props.selected('active')}
        >Active</div>
        <div
          className={styles.button}
          onClick={() => props.selected('completed')}
        >Completed</div>
      </div>
      <div
        className={styles.button}
        onClick={props.clearComplpleted}
      >
        Clear completed</div>
    </div>
  );
}

export default Header;