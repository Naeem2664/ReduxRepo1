import { createSlice } from "@reduxjs/toolkit"

const userSclice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        deleteAllUsers(state,action){
            return [];
        }
    }
})
console.log(userSclice.actions)

export default userSclice.reducer;
export const {addUser,removeUser,deleteAllUsers}=userSclice.actions;