import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import messageService from './messageService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user: user ? user : null,
    text: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message_res: ''
}

// Post new message
export const setMessage = createAsyncThunk('setmessage', async(goalData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await messageService.setMessage(goalData, token)
    } catch (error) {
        const message_res = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message_res)
    }
})

// Get messages
export const getMessage = createAsyncThunk('getmessages', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await messageService.getMessage(token)
    } catch (error) {
        const message_res = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message_res)
    }
})

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(setMessage.pending, (state) => {
            state.isLoading = true
        })
        .addCase(setMessage.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.text.push(action.payload)
        })
        .addCase(setMessage.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.text = action.payload
        })
        .addCase(getMessage.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getMessage.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        .addCase(getMessage.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.text = action.payload
        })
    }
})

export const {reset} = messageSlice.actions
export default messageSlice.reducer