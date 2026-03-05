import { useMovies } from '../zustand/createZustand'
import MovieCard from './MovieCard'

function SearchBar() {

    const moviesData = useMovies().moviesData

  return (
    <>
    <div id='search-bar'>

    <div className='search-div'>
        <h1 className='title-page'>Movie Night</h1>
        <p id='desc-title'>Search a movie and pick your seats</p>
        <div className='search-input'>
            <input className='input-movie' type="text" placeholder='Search movie by title...'/>
        </div>
        <p>Showing {moviesData.length} results</p>
    </div>
    <div className='grid-movies'>
        {moviesData.map((movie, index) => {
            
            return <MovieCard key={index} detail={movie}/>
        })}
    </div>
    </div>
    </>
  )
}

export default SearchBar