import { configureStore } from '@reduxjs/toolkit';
import titleNameReducer from '../features/titleName/titleNameSlice';

export default configureStore({
  reducer: {
    titleName: titleNameReducer,
  },
});