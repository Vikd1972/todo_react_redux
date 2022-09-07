import React from 'react';

import Header from '../header/Header';
import List from '../list/List';
import InputField from '../inputField/InputField';

import styles from './Todolist.module.css';

function Todolist() {

  return (
    <div className={styles.todo__list}>
      <Header />
      <InputField />
      <List />
    </div>
  )
};

export default Todolist;
