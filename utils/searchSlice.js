import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : 'searchSlice',
    initialState:{
        items :[]
    },
    reducers:{
        addQuery: (state, action) => {
        state.items.shift()
        state.items.push(action.payload)
        }
    }
})

export const {addQuery} = searchSlice.actions
export default searchSlice.reducer