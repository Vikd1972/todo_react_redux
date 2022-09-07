import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { clearCompleted, selectShowFiltered} from '../../Store/todoSlice';

import styles from './Header.module.css';

function Header(props) {
  const showFiltered = useSelector(state => state.todo.showFiltered)
  const notes = useSelector(state => state.todo.notes)
  const count = notes.filter(note => !note.isDone).length
  const clearBtn = notes.filter(note => note.isDone).length === 0

  const dispatch = useDispatch()

  return (
    <div className={styles.control_panel}>
      <div className={styles.count}>{count} items left</div>
      <div className={styles.control_panel__buttons}>
        <div
          className={`${styles.button} ${showFiltered === 'all' ? styles.illumination : undefined}`}
          onClick={() => dispatch(selectShowFiltered('all'))}
        >All</div>
        <div
          className={`${styles.button} ${showFiltered === 'active' ? styles.illumination : undefined}`}
          onClick={() => dispatch(selectShowFiltered('active'))}
        >Active</div>
        <div
          className={`${styles.button} ${showFiltered === 'completed' ? styles.illumination : undefined}`}
          onClick={() => dispatch(selectShowFiltered('completed'))}
        >Completed</div>      
      </div>
      <div
        className={`${styles.button} ${styles.clear} ${clearBtn ? styles.hidden_clear : undefined}`}
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed</div>
    </div>
  );
}

export default Header;