import {createSlice } from '@reduxjs/toolkit'

const showList = createSlice({
    name : 'showList',
    initialState:{
        isListOpen : true
    },
    reducers:{
    toggleList : state => {
    state.isListOpen = false
    },
    onSearch : state => {
        state.isListOpen = true
    }
    } 
})
export const {toggleList, onSearch} = showList.actions
export default showList.reducer