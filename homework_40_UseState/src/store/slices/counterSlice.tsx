import { createAction, createReducer, createSlice} from "@reduxjs/toolkit";


// const initialState = {
//     count: 0,
// }

// export const increment = createAction('INCREMENT')
// export const decrement = createAction('DECREMENT')


// export default createReducer(initialState,{
//     'INCREMENT': function (state) {
//         state.count = state.count +1
//     },
    
//     'DECREMENT': function (state) {
//         state.count = state.count -1
//     },
// })

const initialState = {
    count: 0,
  };
  
  export const counterSlice = createSlice({
    name: "Counter",
    initialState: initialState,
    reducers: {
      increment: (state) => {
        state.count += 1;
      },
      decrement: (state) => {
        state.count -= 1;
      },
    },
  });
  
  export const { increment, decrement } = counterSlice.actions;
  
  export default counterSlice.reducer;

