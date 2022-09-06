import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Components/todoSlice/todoSlaice'  

export default configureStore({
  reducer: {
    todo: todoReducer
  }
})