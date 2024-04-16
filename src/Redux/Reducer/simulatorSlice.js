import { createSlice } from '@reduxjs/toolkit'

export const simulatorSlice = createSlice({
    name: 'simulator',
    initialState: {
        selectedPhone: {
            phone: '',
            command: null
        }
    },
    reducers: {
        setPhoneNumber: (state, action) => {
            state.selectedPhone = {
                phone: action.payload.phone,
                command: action.payload.command
            }
        }
    }
})

export const { setPhoneNumber } = simulatorSlice.actions

export default simulatorSlice.reducer