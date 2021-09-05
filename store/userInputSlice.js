import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userQuestion: "",
  userTranscript: "",
};

const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    setUserQuestion: (state, action) => {
      state.userQuestion = action.payload;
    },
    setUserTranscript: (state, action) => {
      state.userTranscript = action.payload;
    },
    resetUserInput: (state) => {
      state.userQuestion = "";
      state.userTranscript = "";
    },
  },
});

export const { setUserQuestion, setUserTranscript, resetUserInput } =
  userInputSlice.actions;

export const selectUserQuestion = (state) => state.userQuestion;
export const selectUserTranscript = (state) => state.userTranscript;

export default userInputSlice.reducer;
