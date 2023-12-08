import { configureStore } from '@reduxjs/toolkit'
import userSclice from './slices/UserSlice'

const store =configureStore({
    reducer:{
        users:userSclice,
    }
})



export default store;