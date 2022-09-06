import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Components/todoSlice/todoSlice'  

export default configureStore({
  reducer: {
    todo: todoReducer
  }
})