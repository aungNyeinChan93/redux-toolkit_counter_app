import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./freature/counter/counterSlice"

const store = configureStore({
    reducer:{
        myCounter: counterSlice
    }
});

export default store;