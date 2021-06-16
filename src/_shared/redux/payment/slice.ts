import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPaymentInfo } from "../../types";

const initialState: IPaymentInfo = {
  email: "",
  cardNumber: "",
  expirationDate: "",
  cvv: "",
};

export const slice = createSlice({
  name: "paymentInfo",
  initialState,
  reducers: {
    updates: (state, action: PayloadAction<Partial<IPaymentInfo>>) => {
      return { ...state, ...action.payload };
    },
    reset: (_) => initialState,
  },
});

export default slice.reducer;
// Action creators are generated for each case reducer function
export const paymentInfoActions = slice.actions;
