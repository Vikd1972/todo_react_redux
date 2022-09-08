import styled from 'styled-components';

import img from '../icons/recycling.svg';

const DeleteButton = styled.div`
  width: 37px;
  height: 37px;
  border: none;
  font-size: 18px;
  background-color: #fff3e0;
  background-image: url(${img});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 10px 10px;
  cursor: pointer;
  visibility: hidden;
`;
const Record = styled.div`
  display: flex;
  flex-direction: row;
  border-left: 1px solid #424242;
  border-right: 1px solid #424242;
  border-bottom: 1px solid #424242;
  font-size: 18px;
  background-color: #fff3e0;
  caret-color: transparent !important;
  justify-content: space-between;
  width: auto;
  &:hover ${DeleteButton} {
    visibility: visible;
  }
`;
const RecordNote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .note-is-done {
    width: 28px;
    height: 28px;
    margin: 4px 3px 3px 3px;
    cursor: pointer;
  }
`;

const TextOrEdit = styled.div`
  caret-color: transparent !important;
  width: auto;
  .edit {
    width: auto;
    height: 31px;
    background-color: #fff3e0;
    font-size: 18px;
    border: none;
    padding-top: 2px;
    outline: none;
    box-shadow: none;
  }
  .edit-field {
    height: 90%;
    width: auto;
    font-size: 18px;
    background: none;
    outline: none;
    border: none;
    padding-left: 7px;
    padding-top: 2px;
    caret-color: #424242;
  }
  .note-text {
    width: auto;
    min-height: 30px;
    height: auto;
    padding-top: 7px;
    padding-left: 7px;
    font-size: 18px;
    background-color: #fff3e0;
    border: none;
    caret-color: transparent !important;

    &:hover ${DeleteButton} {
      visibility: visible;
    }
  }
  .record-is-done {
    text-decoration: line-through;
    color: #bdbdbd; 
  }
`;

export {
  DeleteButton,
  Record,
  RecordNote,
  TextOrEdit,
}