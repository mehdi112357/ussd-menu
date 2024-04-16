import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: ''
  },
  reducers: {
    setUser: (action, state) => {
      state.value = action.payload
    }
  }
})

export const { setUser} = authSlice.actions

export default authSlice.reducer