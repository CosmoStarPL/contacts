import { createSlice } from "@reduxjs/toolkit";

export const createContactModalSlice = createSlice({
  name: "create",
  initialState: {
    isOpened: false,
  },
  reducers: {
    openModal: (state) => {
      return {
        ...state,
        isOpened: true,
      };
    },
    closeModal: (state) => {
      return {
        ...state,
        isOpened: false,
      };
    },
  },
});

export const { closeModal, openModal } = createContactModalSlice.actions;

export default createContactModalSlice.reducer;
