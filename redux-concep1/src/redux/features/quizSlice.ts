import { quizData } from "@/home/quizData";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state

const initialState = {
  questions: quizData,
  currentQuestionIndex: 0,

  userAnswer: Array(quizData.length).fill(null),
  //   quizComplete: boolean;
};

export const quizSlice = createSlice({
  name: "quiz",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;

      state.userAnswer[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const { setAnswer, nextQuestion, previousQuestion } = quizSlice.actions;
export default quizSlice.reducer;
