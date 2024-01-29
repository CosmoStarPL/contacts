import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../slices/contactSlice";
import createContactModalReducer from "../slices/createContactModalSlice";
import editModalReducer from "../slices/editModalSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer,
    createContactModal: createContactModalReducer,
    editModal: editModalReducer,
  },
});

export default store;
