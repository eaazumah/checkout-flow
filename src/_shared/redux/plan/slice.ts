import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlan } from "../../types";

const initialState: IPlan = {
  size: 5,
  duration: 12,
  upfrontPayment: false,
};

export const slice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    updates: (state, action: PayloadAction<Partial<IPlan>>) => {
      return { ...state, ...action.payload };
    },
    reset: (_) => initialState,
  },
});

export default slice.reducer;
// Action creators are generated for each case reducer function
export const planActions = slice.actions;
