import { create } from "zustand"
import { MovieType } from "../types/movie"

interface State{
  movies: MovieType[],
  updateMovies(movies: MovieType[]): void
}

export const useMoviesStore = create<State>(set => ({
  movies: [],
  updateMovies: (newMovies: MovieType[]) => set(({movies: newMovies}))
}))