import { useNavigate } from 'react-router-dom'
import { useMovies } from '../zustand/createZustand'

function MovieCard(props) {

    const navigate = useNavigate()
    const chooseIdMovie = useMovies().chooseIdMovie
    const { detail } = props 

    function moveToMovie() {

        chooseIdMovie(detail.imdbID)
        navigate('/movie/detail')
    }
  return (
    
    <div className='card'>
        <div id='image-div' style={{height: '40%',backgroundImage: `url("${detail.Images[0]}"`, backgroundPosition: 'center', backgroundRepeat: 'no-reapet', backgroundSize: 'cover'}}>
            <p className='title-movie'>{detail.Title}</p>
        </div>
        <div className='bottom-div'>
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
            <button onClick={moveToMovie} className='select-seats'>Select Seats</button>
        </div>
    </div>
  )
}

export default MovieCard