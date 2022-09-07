import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { clearCompleted, selectShowFiltered} from '../../Store/todoSlice';
const ControlPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: auto;
  max-width: 600px;
  margin: 0 5px 2px 5px;
`;
const Count = styled.div`
  &:hover {
    cursor: pointer;  
  }
`;
const ControlPanelButton = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 445px) {
    order: 1;
    margin: 5px auto 0 auto
  }
`;
const Button = styled.div`
  margin-left: 10px;
  padding: 0 5px 0 5px;  
  cursor: pointer;
  border: 1px solid #424242;
  border-radius: 10px;
  caret-color: transparent !important;
  width: auto;
  &:hover {
    background-color: #ffcc80;
  }
`;
const ButtonAll = styled(Button)`
  ${(props) => {
    if (props.$show) return `background-color: #ffcc80`
  }}
`;
const ButtonActive = styled(Button)`
  ${(props) => {
    if (props.$show) return `background-color: #ffcc80`
  }}
`;
const ButtonCompleted = styled(Button)`
  ${(props) => {
    if (props.$show) return `background-color: #ffcc80`
  }}
`;
const ButtonClear = styled(Button)`
  width: 120px;
  ${(props) => {
    if (props.$clear) return `opacity: 0;`
  }}
`;


function Header(props) {
  const showFiltered = useSelector(state => state.todo.showFiltered)
  const notes = useSelector(state => state.todo.notes)
  const count = notes.filter(note => !note.isDone).length
  const clearBtn = notes.filter(note => note.isDone).length === 0

  const dispatch = useDispatch()

  return (
    <ControlPanel>
      <Count>
        {count} items left
      </Count>
      <ControlPanelButton>
        <ButtonAll $show={showFiltered === 'all'}          
          onClick={() => dispatch(selectShowFiltered('all'))}
        >All</ButtonAll>
        <ButtonActive $show={showFiltered === 'active'}           
          onClick={() => dispatch(selectShowFiltered('active'))}
        >Active</ButtonActive>
        <ButtonCompleted $show={showFiltered === 'completed'}           
          onClick={() => dispatch(selectShowFiltered('completed'))}
        >Completed</ButtonCompleted>      
      </ControlPanelButton>
      <ButtonClear $clear={clearBtn}
        onClick={() => dispatch(clearCompleted())}>
        Clear completed
      </ButtonClear>
    </ControlPanel>
  );
}

export default Header;