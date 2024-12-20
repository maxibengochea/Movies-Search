import { useMoviesStore } from "../store/useMoviesStore"
import { useSearchStore } from "../store/useSearchStore"
import { Movie } from "./Movie"

export function Results(){
  const movies = useMoviesStore(state => state.movies)
  const searching = useSearchStore(state => state.searching)
  const notFound = useSearchStore(state => state.notFound)
  
  return (
    <>
      {
        searching
        ?
          (
            <section>
              <p className="text-green-600 font-bold text-[25px] text-center">Loading...</p>
            </section>
          )
        :
          notFound 
          ?
            (
              <section>
                <p className="text-red-600 font-bold text-[25px] text-center">Movie not found</p>
              </section>
            )
          :
            (
              movies.length > 0 &&
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-content-center gap-[15px] w-[80%]">
              {
                movies.map(({ Title, Year, Poster, ImdbID }) => (
                  <li
                    className="flex items-start justify-center" 
                    key={ImdbID}>
                    <Movie
                      title={Title}
                      year={Year}
                      poster={Poster}
                    />
                  </li>
                ))
              }
              </ul>
            )
      }
    </>
  )
}