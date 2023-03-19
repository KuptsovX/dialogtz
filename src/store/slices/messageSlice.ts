import {createSlice} from "@reduxjs/toolkit";
// import {getMessages} from "../requests/messageRequest";

export interface MessageStore {
    isRead: boolean
    isNew: boolean
    reaction: string
    platformCode: string
    dateFrom: string
    dateTo: string
    search: string
    sortingField: string
}

// const initialState: MessageStore = {
//     isRead: false,
//     isNew: false,
//     reaction: "",
//     platformCode: "",
//     dateFrom: "",
//     dateTo: "",
//     search: "",
//     sortingField: ""
// }

const initialState = {

}
export const messageSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        dropMessageSlice: () => initialState
    },
    // extraReducers: (builder) => {
    //     builder.addCase(getMessages.fulfilled,(state, {payload}) => {
    //         // state = payload
    //     })
    // }
})

export const messageReducer = messageSlice.reducer