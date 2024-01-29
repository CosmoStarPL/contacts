import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    value: [],
    id: 0,
  },
  reducers: {
    createContact: (state, action) => {
      state.value.push({
        id: state.id,
        name: action.payload[0],
        number: action.payload[1],
      });
    },
    deleteContact: (state, action) => {
      state.value = state.value.filter(
        (contact) => contact.id !== action.payload
      );
    },
    editContact: (state, action) => {
      const [i, name, number] = action.payload;
      state.value[i].name = name;
      state.value[i].number = number;
    },
    idChange: (state) => {
      state.id = state.id + 1;
    }
  },
});

export const { createContact, idChange, deleteContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;
