import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProgress } from '@/types';

interface AppState {
  userProgress: UserProgress;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  addCompletedCase: (caseId: string) => void;
  addAssessmentScore: (questionId: string, correct: boolean) => void;
  toggleFavorite: (conditionId: string) => void;
  addToLastVisited: (conditionId: string) => void;
  resetProgress: () => void;
}

const initialProgress: UserProgress = {
  completedCases: [],
  assessmentScores: [],
  favoriteConditions: [],
  lastVisited: [],
};

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      userProgress: initialProgress,
      searchQuery: '',

      setSearchQuery: (query) => set({ searchQuery: query }),

      addCompletedCase: (caseId) =>
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            completedCases: [...new Set([...state.userProgress.completedCases, caseId])],
          },
        })),

      addAssessmentScore: (questionId, correct) =>
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            assessmentScores: [
              ...state.userProgress.assessmentScores,
              { questionId, correct, timestamp: Date.now() },
            ],
          },
        })),

      toggleFavorite: (conditionId) =>
        set((state) => {
          const favorites = state.userProgress.favoriteConditions;
          const newFavorites = favorites.includes(conditionId)
            ? favorites.filter((id) => id !== conditionId)
            : [...favorites, conditionId];

          return {
            userProgress: {
              ...state.userProgress,
              favoriteConditions: newFavorites,
            },
          };
        }),

      addToLastVisited: (conditionId) =>
        set((state) => {
          const lastVisited = [
            conditionId,
            ...state.userProgress.lastVisited.filter((id) => id !== conditionId),
          ].slice(0, 10);

          return {
            userProgress: {
              ...state.userProgress,
              lastVisited,
            },
          };
        }),

      resetProgress: () => set({ userProgress: initialProgress }),
    }),
    {
      name: 'clinstart-storage',
    }
  )
);
