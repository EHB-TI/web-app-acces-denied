import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload   //payload = userinformation
    },
    logout: (state) => {
      state.user = null
    },
  },
})

export const { login, logout } = userSlice.actions

// The function below is called a selector and allows us to select a value
// For example: `useSelector((state) => state.user.value)`
export const selectUser = (state) => state.user.user

export default userSlice.reducer