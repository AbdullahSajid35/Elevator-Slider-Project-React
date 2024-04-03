import { configureStore } from "@reduxjs/toolkit";
import elevatorSlice from "./elevatorSlice";

const store = configureStore(
    {
        reducer : elevatorSlice
    }
)


export default store