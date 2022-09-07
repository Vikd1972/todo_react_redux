import React from 'react';
import styled from 'styled-components/macro';

import Header from '../header/Header';
import List from '../list/List';
import InputField from '../inputField/InputField';

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px;
  max-width: 600px;
  width: 100%;
  height: auto;
`;

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
