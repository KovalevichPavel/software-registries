import { createSlice } from '@reduxjs/toolkit';


export const titleNameSlice = createSlice({    
  name: 'titleName',
  initialState: {
    value: 'Вход в аккаунт',
  },
  reducers: {
    logOut: (state) => {     
      state.value = 'Вход в аккаунт'
    },
    logIn: (state, action) => {
      state.value = action.payload
    },
  },
})

export const selectTitleName = (state) => state.titleName.value

export const { logIn, logOut } = titleNameSlice.actions

export default titleNameSlice.reducer