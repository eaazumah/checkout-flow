import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISettings } from "../../types";

const initialState: ISettings = {
  theme: "light",
};

export const slice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updates: (state, action: PayloadAction<Partial<ISettings>>) => {
      return { ...state, ...action.payload };
    },
    reset: (_) => initialState,
  },
});

export default slice.reducer;
// Action creators are generated for each case reducer function
export const settingsActions = slice.actions;
