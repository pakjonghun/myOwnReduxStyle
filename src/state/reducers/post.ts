import { failPayload, requestPayload } from "./../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { successPayload } from "../types";

export type CounterState = {
  data: number;
  incrementStatus: "incrementLoading" | "incrementFail" | "incrementSuccess";
  error: null | string;
};

export const initialState: CounterState = {
  data: 1,
  incrementStatus: "incrementSuccess",
  error: null,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementRequest: (state, _: PayloadAction<requestPayload>) => {
      state.incrementStatus = "incrementLoading";
    },
    incrementSuccess: (state, { payload }: PayloadAction<successPayload>) => {
      state.incrementStatus = "incrementSuccess";
      state.data += payload.data;
    },
    incrementFail: (state, { payload }: PayloadAction<failPayload>) => {
      state = initialState;
      state.incrementStatus = "incrementFail";
      state.error = payload;
    },
  },
});

export const { incrementRequest, incrementSuccess, incrementFail } =
  counterSlice.actions;
export default counterSlice;
