import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    firstname: '',
    lastname: '',
    website: '',
    twitter: '',
    linkedin: '',
    github: '',

    objective: '',
    email: '',
    address: '',
    education: 
    {
      degree: "",
      institute: "",
      description: "",
      startYear: "",
      endYear: "",
    },

    skills: [''],
    activities: [''],

    experience: [
      {
        position: "",
        company: "",
        description: "",
        startYear: "",
        endYear: "",
      },
      {
        position: "",
        company: "",
        description: "",
        startYear: "",
        endYear: "",
      }
    ],
  }
}

export const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState,
  reducers: {
    update: (state, action) => {
      const { name, value } = action.payload;
      state.value[name] = value
    },
   
  }
})

export const { update, updateObj } = resumeDataSlice.actions

export default resumeDataSlice.reducer;