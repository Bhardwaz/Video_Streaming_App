import { createSlice } from "@reduxjs/toolkit";

const suggestions = createSlice({
    name : 'suggestions',
    initialState:{
        results:[]
    },
    reducers:{
        addQueries:(state, action) => {
        state = state.results.push(action.payload)
        }
    }
})
export const {addQueries} = suggestions.actions
export default suggestions.reducer
