import {createSlice} from "@reduxjs/toolkit";
import {getMessages, getSortedMessages, loginRequest, refreshRequest, searchMessages} from "../requests/messageRequest";


export interface MessageType {
    meta: {
        pageSize: number,
        pageNumber: number,
        count: number
    }

    data: [
        {
            id: number,
            date: string,
            title: string,
            content: string,
            imageUrl: string,
            filters: [
                {
                    id: number,
                    title: string
                }
            ],
            platform: {
                id: number,
                name: string,
                code: string
            },
            isRead: boolean,
            reaction: string,
            isNew: boolean
        }
    ]
}

export interface TokenType {
    accessToken: string
    refreshToken: string
}

export interface SortType {
    watchState: string
    reaction: string
    sort: string
    platform: [string]
    dateFrom: string
    dateTo: string
    search: string
}

export interface MessageStore {
    messages: MessageType
    sorter: SortType
    token: TokenType
}

const initialState: MessageStore = {
    messages: {
        meta: {
            pageSize: 0,
            pageNumber: 0,
            count: 0,
        },
        data: [
            {
                id: 0,
                content: "",
                title: "",
                date: "",
                imageUrl: "",
                filters: [{id: 0, title: ""}],
                platform: {
                    id: 0,
                    code: "",
                    name: "",
                },
                isRead: false,
                isNew: false,
                reaction: ""
            }
        ]
    },
    sorter: {
        watchState: "",
        reaction: "",
        sort: "",
        platform: [""],
        dateFrom: "",
        dateTo: "",
        search: ""
    },
    token: {
        accessToken: "",
        refreshToken: ""
    }
}
export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        dropMessageSlice: () => initialState, //для сброса стейта для потенциального логаута
        addWatchState: (state, action) => {
            state.sorter.watchState = action.payload
        },
        addReaction: (state, action) => {
            state.sorter.reaction = action.payload
        },
        addSort: (state, action) => {
            state.sorter.sort = action.payload
        },
        addPlatform: (state, action) => {
            state.sorter.platform.push(action.payload)
        },
        addDateFrom: (state, action) => {
            state.sorter.dateFrom = action.payload
        },
        addDateTo: (state, action) => {
            state.sorter.dateTo = action.payload
        },
        searching: (state, action) => {
            state.sorter.search = action.payload
        },
        removePlatform: (state, action) => {
            const elIndex = state.sorter.platform.indexOf(action.payload)
            if (elIndex > -1) {
                delete state.sorter.platform[elIndex]
            }
        },
        clearFilters: (state, action) => {
            state.sorter = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getMessages.fulfilled, (state, {payload}) => {
            state.messages = payload
        })
        builder.addCase(getSortedMessages.fulfilled, (state, {payload}) => {
            state.messages = payload
        })
        builder.addCase(loginRequest.fulfilled, (state, {payload}) => {
            state.token = payload
        })
        builder.addCase(searchMessages.fulfilled, (state, {payload}) => {
            state.messages = payload
        })
        builder.addCase(refreshRequest.fulfilled, (state, {payload}) => {
            state.token.accessToken = payload
        })
    }
})

export const {dropMessageSlice, addWatchState, addDateTo, addDateFrom, addReaction, addSort, addPlatform, searching, clearFilters, removePlatform} = messageSlice.actions
export const messageReducer = messageSlice.reducer