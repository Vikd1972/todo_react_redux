import styled from 'styled-components';

const ControlPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: auto;
  max-width: 600px;
  margin: 0 5px 2px 5px;
  .count {
    &:hover {
      cursor: pointer;  
    }
  }
  .button {
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
  }
  .button-clear {
    opacity: 0;
  }
`;

const ControlPanelButton = styled.div`
  display: flex;
  flex-direction: row;
  .button-show {
    background-color: #ffcc80;
  }
  @media (max-width: 445px) {
    order: 1;
    margin: 5px auto 0 auto
  }
`;


export {
  ControlPanel,
  ControlPanelButton
}