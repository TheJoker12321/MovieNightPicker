import React from 'react'
import { useMovies } from '../zustand/createZustand'

function MovieCard(props) {

    const { detail } = props 
  return (
    
    <div className='card'>
        <div id='image-div'>
            <img className='image-card' src={detail.Images[0]} alt="" />
            <p className='title-movie'>{detail.Title}</p>
        </div>
        <div>
            <div className='types'>
                <h4>Year</h4>
                <p>{detail.Year}</p>
            </div>
            <div className='types'>
                <h4>Runtime</h4>
                <p>{detail.Runtime}</p>
            </div>
            <div className='types'>
                <h4>Genre</h4>
                <p>{detail.Genre}</p>
            </div>
            <div className='types'>
                <h4>Language</h4>
                <p>{detail.Language}</p>
            </div>
            <button>Select Seats</button>
        </div>
    </div>
  )
}

export default MovieCard