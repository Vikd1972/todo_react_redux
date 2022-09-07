import React from 'react';
import styled from 'styled-components/macro';

import Todolist from './Components/todolist/Todolist';

const TodoField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TodoName = styled.div`
  color: #424242;
  text-align: center;
  margin-top: 50px;
  font-size: 76px;
  width: 600px;
`;

function App() {
  return (
    <TodoField>
      <TodoName>
        TODOS
      </TodoName>
      <Todolist />      
    </TodoField>
  );
}

export default App;
