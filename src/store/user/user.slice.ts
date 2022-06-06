import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./user.reducer";

const initialState = {
    authenticatede: false
}

export const userSlice = createSlice({
    name: 'user',
    reducers,
    initialState
})
