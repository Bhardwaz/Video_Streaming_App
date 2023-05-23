import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import suggestions from "./suggestions";

const store = configureStore({
    reducer : {
      menu : menuSlice,
      search : suggestions
    }
})

export default store