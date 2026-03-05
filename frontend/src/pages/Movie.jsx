import React from 'react'
import { useMovies } from '../zustand/createZustand'
import { useNavigate } from 'react-router-dom'

function Movie() {

    const navigate = useNavigate()
    const moviesData = useMovies().moviesData
    const newId = useMovies().idMovie
    console.log(newId);
    
    const movieChoose = moviesData.filter(movie => movie.imdbID === newId)
    console.log(movieChoose);
    
    function back() {

        navigate('/')
    }
  return (
    <>
    <div className='header-page'style={{width: '100%',height: '40%',backgroundImage: `url("${movieChoose[0].Images[1]}"`, backgroundPosition: 'center', backgroundRepeat: 'no-reapet', backgroundSize: 'cover'}}>
    </div>
    <div className='details-movie'>
        <button className='back' onClick={back}>{'<--'}back</button>
        <h1 style={{color: 'white'}}>{movieChoose[0].Title} {`(${movieChoose[0].Year})`}</h1>
        <p style={{color: 'white'}}>Pick your seats and enjoy</p>
        <div className='show-details'>
            <div>
                <img style={{height: '70%', width: '90%'}} src={movieChoose[0].Images[0]} alt="" />
                <button className='choose-seat'>choose seats</button>
            </div>
            <div>
                <div className='more-details'>
                    <div className='det'>IMDb: {movieChoose[0].imdbRating}</div>
                    <div className='det'>Votes: {movieChoose[0].imdbVotes}</div>
                    <div className='det'>Metascore: {movieChoose[0].Metascore}</div>
                </div>
                    <h1>Story</h1>
                    <p>{movieChoose[0].Plot}</p>
                    <div className='more-det-div'>
                        <div className='more-det'>
                            <h4>movieId</h4>
                            <p>{movieChoose[0].imdbID}</p>
                        </div>
                        <div className='more-det'>
                            <h4>Year</h4>
                            <p>{movieChoose[0].Year}</p>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button id='start-button'>Go to start</button>
                        <button id='back-botton'>Back to list</button>
                    </div>
            </div>
        </div>
    </div>
    </>    
)
}

export default Movie