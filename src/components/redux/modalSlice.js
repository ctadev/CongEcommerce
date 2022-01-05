import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalState",
  initialState: false,
  reducers: {
    toggleModal: (state) => {
      return !state;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
