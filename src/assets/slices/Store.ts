import { configureStore } from '@reduxjs/toolkit';
import  stReducer from './User'

const Store = configureStore({
  reducer: {
    setData:  stReducer, 
  },
});

export default Store;

