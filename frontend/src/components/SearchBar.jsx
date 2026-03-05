import { useState } from 'react'
import { useMovies } from '../zustand/createZustand'
import MovieCard from './MovieCard'
import { useDebouncedValue } from '../hooks/useChange'
import { useEffect } from 'react'

function SearchBar() {
    const moviesData = useMovies().moviesData
    const [moviesFilter, setMoviesFilter] = useState(moviesData)
    const { debounce, val } = useDebouncedValue('all')

    console.log(val);
    

    useEffect(() => {

        
        if (val === 'all') {

            setMoviesFilter(moviesData)
        } else {
            const movie = moviesData.filter((movie) => movie.Title.includes(val))
            setMoviesFilter(movie)
        }
    }, [val])

    
  return (
    <>
    <div id='search-bar'>

    <div className='search-div'>
        <h1 className='title-page'>Movie Night</h1>
        <p id='desc-title'>Search a movie and pick your seats</p>
        <div className='search-input'>
            <input className='input-movie' onChange={(e) => debounce(e.target.value)} type="text" placeholder='Search movie by title...'/>
        </div>
        <p>Showing {moviesFilter.length} results</p>
    </div>
    <div className='grid-movies'>
        {moviesFilter.map((movie, index) => {
            
            return <MovieCard key={index} detail={movie}/>
        })}
    </div>
    </div>
    </>
  )
}

export default SearchBar