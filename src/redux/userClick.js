import { createSlice } from "@reduxjs/toolkit";

const UserClickSlice = createSlice({
    name: 'userClick',
    initialState: {
        viewClicked: false
    },
    reducers:{
        addUserClick(state, { payload }){
           state.viewClicked = payload
        },
        removeUserClick(state, { payload }){
            state.viewClicked = payload
        }
    }
})

export const { addUserClick, removeUserClick } = UserClickSlice.actions

export default UserClickSlice.reducer