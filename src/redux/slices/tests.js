import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchTests = createAsyncThunk('tests/fetchTests', async () => {
    const {data} = await axios.get('tests')
    return data
})

const initialState = {
    tests: {
        items: [],
        status: 'loading'
    }
}

const testSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTests.pending, (state) => {
                state.tests.status = 'loading';
            })
            .addCase(fetchTests.fulfilled, (state, action) => {
                state.tests.items = action.payload;
                state.tests.status = 'loaded';
            })
            .addCase(fetchTests.rejected, (state) => {
                state.tests.items = [];
                state.tests.status = 'error';
            })
    },
})

export const testsReducer = testSlice.reducer;