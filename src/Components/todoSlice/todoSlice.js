import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', isDone: false, text: 'first text' },
  { id: '2', isDone: true, text: 'second text' }
]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewNote: (state, action) => {
      console.log(action.payload)
    
      state.push(action.payload)
      
    },
    deleteNote: (state, action) => {

    },
    noteIsDone: (state, action) => {

    },
    allIsDone: state => {

    },
    clearCompleted: state => {

    }
  }
})

export const {
  addNewNote,
  deleteNote, noteIsDone, allIsDone, clearCompleted } = todoSlice.actions
export default todoSlice.reducer