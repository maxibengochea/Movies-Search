import { create } from "zustand"

interface State{
  searching: boolean,
  notFound: boolean,
  updateSearching(newSearching: boolean): void,
  updateNotFound(newNotFound: boolean): void
}

export const useSearchStore = create<State>(set => ({
  searching: false,
  notFound: false,
  updateSearching: (newSearching: boolean) => set(({searching: newSearching})),
  updateNotFound: (newNotFound: boolean) => set(({notFound: newNotFound}))
}))