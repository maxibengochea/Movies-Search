import { MovieType } from "../types/movie"

const API_URL = 'http://www.omdbapi.com'
const API_KEY = '467f4f72'

interface Response{
  Response: 'True' | 'False',
  Search: MovieType[],
}

export const getMovie = async (movie: string) => {
  return fetch(`${API_URL}/?apikey=${API_KEY}&s=${movie}`)
    .then(data => data.json())
    .then((res: Response) => res)
}