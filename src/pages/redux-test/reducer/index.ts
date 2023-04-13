import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initState: CounterState = {
  count: 0,
};

interface MyAction {
  payload: any;
}

export const countSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    add: (state: CounterState, action: MyAction) => {
      state.count += action.payload;
    },
    reduce: (state: CounterState) => {
      state.count--;
    },
  },
});
export const { add, reduce } = countSlice.actions;
export default countSlice.reducer;
