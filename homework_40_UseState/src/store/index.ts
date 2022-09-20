import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { postsReducer } from './slices/postsFetch.Slice';

import postLittleReducer from './slices/LittlePostCard.Slice';
import postTwoReducer from './slices/BigPostCard.Slice';
import toolkitReducer from "./slices/counterSlice";


export const store = configureStore({
    reducer: {
        
        postLittle: postLittleReducer,
        postBig: postTwoReducer,

        toolkit: toolkitReducer,
        posts: postsReducer,
        
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;