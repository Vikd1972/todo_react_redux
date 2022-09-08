import React from 'react';
//import styled from 'styled-components/macro';

import Header from '../header/Header';
import List from '../list/List';
import InputField from '../inputField/InputField';

import { TodoList } from './Todolist.styled';

function Todolist() {

  return (
    <TodoList>
      <Header />
      <InputField />
      <List />
    </TodoList>
  )
};

export default Todolist;
