import { createSlice } from '@reduxjs/toolkit';


const initialState: any[] = [
    {   
        title: 'Card One',
        date: 'April 20, 2021',
        text: 'test'
    },

    {
        title: 'Card One',
        date: 'April 20, 2021',
        text: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
    },   
];


const postsSlice = createSlice({
    name: 'BigPostCard',
    initialState,
    reducers: {
        BigPostCard(state, action) {
            
        }
    },
});

export const {BigPostCard} = postsSlice.actions;

export default postsSlice.reducer;