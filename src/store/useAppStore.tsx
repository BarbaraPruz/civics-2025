import { create } from "zustand";
import { type Category, Categories } from "@/types/category";

type AppState = {
  // Settings
  category: Category;
  quizRetryList: boolean;

  // Game state
  numberCorrect: number;
  numberAsked: number;
  retryList: Set<number>;

  // Actions
  setCategory: (val: Category) => void;
  setQuizRetryList: (val: boolean) => void;
  markCorrect: () => void;
  incrementQuestionsAsked: () => void;
  addToRetryList: (n: number) => void;
  resetScore: () => void;
  resetRetryList: () => void;
};

const useAppStore = create<AppState>((set) => ({
  // Initial state
  category: Categories.AllQuestions,
  quizRetryList: false,
  numberCorrect: 0,
  numberAsked: 0,
  retryList: new Set(),

  // Actions
  setCategory: (val) => set({ category: val }),
  setQuizRetryList: (val) => set({ quizRetryList: val }),
  markCorrect: () =>
    set((state) => ({
      numberCorrect: state.numberCorrect + 1,
    })),
  incrementQuestionsAsked: () =>
    set((state) => ({
      numberAsked: state.numberAsked + 1,
    })),
  addToRetryList: (n) =>
    set((state) => ({ retryList: new Set([...state.retryList, n]) })),
  resetScore: () => set({ numberCorrect: 0, numberAsked: 0 }),
  resetRetryList: () => set({ retryList: new Set() }),
}));

export default useAppStore;
