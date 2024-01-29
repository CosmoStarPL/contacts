import { createSlice } from "@reduxjs/toolkit";

export const editModalSlice = createSlice({
  name: "editModal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openEditModal: (state) => {
      return {
        ...state,
        isOpen: true,
      };
    },
    closeEditModal: (state) => {
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

export const { openEditModal, closeEditModal } = editModalSlice.actions;

export default editModalSlice.reducer;
