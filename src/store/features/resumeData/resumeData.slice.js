import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    image: '',
    firstname: '',
    lastname: '',
    title: '',
    website: '',
    twitter: '',
    linkedin: '',
    github: '',

    objective: '',
    contact: '',
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

    skills: ["", "", "", "", "", ""],
    activities: ["", "", ""],

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

    projects: [
      {
        name: "",
        role: "",
        description: "",
      },
      {
        name: "",
        role: "",
        description: "",
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

export const { update } = resumeDataSlice.actions

export default resumeDataSlice.reducer;