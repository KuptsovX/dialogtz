import {createAsyncThunk} from "@reduxjs/toolkit";

export const getMessages = createAsyncThunk(
    '/messages',
    async () => {
        return await fetch('https://localhost:8000/messages').then(response => response.json())
}
)

export const login = createAsyncThunk(
    './login',
    async () => {
        await fetch('http://localhost:8000/sign-in').then()
    }
)