import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1
};

export const templateSlice = createSlice({
  name: "template",
  initialState,  
  reducers: {
    updateTemplate: (state, action) => {
      const { id } = action.payload;
      state.value = id
    },
   
  }
})

export const { updateTemplate } = templateSlice.actions;

export default templateSlice.reducer;