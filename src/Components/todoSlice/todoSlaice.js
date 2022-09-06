import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', text: 'first text', isDone: false },
  { id: '2', text: 'second text', isDone: false }
]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewNote: state => {

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

export const { addNewNote, deleteNote, noteIsDone, allIsDone, clearCompleted } = todoSlice.actions
export default todoSlice.reducer