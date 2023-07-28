import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import suggestions from "./suggestions";
import searchSlice from "./searchSlice";
import showListSlice from "./showListSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    search: suggestions,
    query: searchSlice,
    list: showListSlice,
    chat: chatSlice,
  },
});

export default store;
