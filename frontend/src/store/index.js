import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    addby(state, action, number){
        state.counter += action.payload
    }
  }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const actions= counterSlice.actions;
export default store;