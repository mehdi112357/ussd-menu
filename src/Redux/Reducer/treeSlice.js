import { createSlice } from '@reduxjs/toolkit'

export const treeSlice = createSlice({
    name: 'tree',
    initialState: {
        selectedNode: {
            id: null,
            type: null
        }
    },
    reducers: {
        setSelectedNode: (state, action) => {
            state.selectedNode = {
                id: action.payload.id,
                type: action.payload.type
            }
        }
    }
})

export const { setSelectedNode } = treeSlice.actions

export default treeSlice.reducer