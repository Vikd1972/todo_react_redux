import React from 'react';

import Todolist from './Components/todolist/Todolist';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.todo__field}>
      <div className={styles.todo__name}>TODOS</div>
      <Todolist />      
    </div>
  );
}

export default App;
