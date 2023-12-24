import { create } from 'zustand'


interface State {
   setTheme: (theme: string) => void;
	theme: string;}

export const useStore = create<State>()(set => ({

  theme: "",
  setTheme: (theme: string ) => set((state) => ({ theme })),
}))
