import { createSlice } from "@reduxjs/toolkit";

const lovedSlice = createSlice({
  name: "loved",
  initialState: {
    loved: [],
  },
  reducers: {
    addToLoved: (state, action) => {
      const exists = state.loved.find((m) => m.id === action.payload.id);
      if (!exists) {
        state.loved.push(action.payload);
      }
    },

    removeFromLoved: (state, action) => {
      state.loved = state.loved.filter((m) => m.id !== action.payload);
    },
  },
});

export const { addToLoved, removeFromLoved } = lovedSlice.actions;
export default lovedSlice.reducer;
