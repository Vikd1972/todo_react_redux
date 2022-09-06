import React from 'react';

import styles from './Header.module.css';

function Header(props) {
  return (
    <div className={styles.control_panel}>
      <div className={styles.count}>{props.count} items left</div>
      <div className={styles.control_panel__buttons}>
        <div
          className={`${styles.button} ${props.selectFilter === 'all' ? styles.illumination : undefined}`}
          onClick={() => props.selectedFilter('all')}
        >All</div>
        <div
          className={`${styles.button} ${props.selectFilter === 'active' ? styles.illumination : undefined}`}
          onClick={() => props.selectedFilter('active')}
        >Active</div>
        <div
          className={`${styles.button} ${props.selectFilter === 'completed' ? styles.illumination : undefined}`}
          onClick={() => props.selectedFilter('completed')}
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