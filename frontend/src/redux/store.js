import { configureStore } from "@reduxjs/toolkit";
import likeReducer from './like';

export default configureStore({
    reducer: {
        like: likeReducer,
    }
})