import { createAction, createReducer } from "@reduxjs/toolkit";


const initialState = {
    count: 0,
}


export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
// export const disabled = createAction('disabled')

export default createReducer(initialState,{
    [increment as unknown as string]: function (state) {
        state.count = state.count +1
    },
    [decrement as unknown as string]: function (state) {
        state.count = state.count -1
    },
})

