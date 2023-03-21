import {createAsyncThunk} from "@reduxjs/toolkit";


const loginData = {
    "email": "admin@mail.com",
    "password": "admin"
}

export interface getMessagesParams {
    token?: string;
    pageSize?: number;
    pageNumber?: number
    refreshToken?: string
    searchData?: string
    watchState?: string
    reaction?: string
    sort?: string
    platform?: [string]
    dateFrom?: string
    dateTo?: string
    search?: string
    isNew?: boolean
    isRead?: boolean
}

export const getMessages = createAsyncThunk(
    '/messages',
    async ({token, pageSize, pageNumber}: getMessagesParams) => {
        return await fetch(`http://localhost:8000/messages?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then(response => response.json())

    }
)

export const getSortedMessages = createAsyncThunk(
    '/sortMessages',
    async ({
               isRead,
               pageSize,
               pageNumber,
               platform,
               dateTo,
               dateFrom,
               reaction,
           }: getMessagesParams) => {
        return await fetch(
            `http://localhost:8000/messages?pageNumber=${pageNumber}&pageSize=${pageSize}&isRead=${isRead}&reaction=${reaction}&platformCode=${platform}&dateFrom=${dateFrom}&dateTo=${dateTo}`, {
                method: 'GET',
            }).then(response => response.json())
    }
)

export const searchMessages = createAsyncThunk(
    'message/search',
    async ({searchData}: getMessagesParams) => {
        return await fetch(`http://localhost:8000/messages?search=${searchData}`).then(response =>
            response.json()
        )
    }
)
export const loginRequest = createAsyncThunk(
    './login',
    async () => {
        return await fetch('http://localhost:8000/auth/sign-in',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData)
            }).then(response => response.json())

    }
)

export const refreshRequest = createAsyncThunk(
    '/refresh',
    async (refreshToken: string) => {
        return await fetch('http://localhost:8000/auth/refresh',
            {
                body: JSON.stringify(refreshToken)
            }).then(res => res.json())
    }
)