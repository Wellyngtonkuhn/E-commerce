import { createSlice } from "@reduxjs/toolkit";

const ShowMobileSlice = createSlice({
    name: 'showMobile',
    initialState: {
        show: false
    },
    reducers:{
        showMobile(state, { payload }){
           state.show = payload
        },
        hideMobile(state, { payload }){
            state.show = payload
        }
    }
})

export const { showMobile, hideMobile } = ShowMobileSlice.actions

export default ShowMobileSlice.reducer