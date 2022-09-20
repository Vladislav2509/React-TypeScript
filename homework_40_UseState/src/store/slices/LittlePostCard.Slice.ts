import { createSlice } from '@reduxjs/toolkit';

export const initialState: any[] = [
    {
        date: 'April 20, 2021',
        text: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
    },

    {
        date: 'April 20, 2021',
        text: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
    }
];

const postsSlice = createSlice({
    name: 'LittlePostCard',
    initialState,
    reducers: {
        LittlePostCard(state, action) {
            
        }
    },
});

export const {LittlePostCard} = postsSlice.actions;

export default postsSlice.reducer;