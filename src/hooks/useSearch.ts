import { useState } from "react"
import { getMovie } from "../services/getMovie"
import { useMoviesStore } from "../store/useMoviesStore"
import { useSearchStore } from "../store/useSearchStore"

export function useSearch(){
  const [search, setSearch] = useState<string>('')
  const updateNotFound = useSearchStore(state => state.updateNotFound)
  const updateSearching = useSearchStore(state => state.updateSearching)
  const updateMovies = useMoviesStore(state => state.updateMovies)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(search == '')
      return

    setSearch('')
    updateSearching(true)
    e.currentTarget.querySelector('input')!.value = ''
    const result = await getMovie(search)
    
    if(result.Response == 'True'){
      updateMovies(result.Search)
      updateNotFound(false)
      updateSearching(false)
    }

    else
      updateNotFound(true)
      updateSearching(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLocaleLowerCase().trim())
  }

  return {
    handleChange,
    handleSubmit
  }
}