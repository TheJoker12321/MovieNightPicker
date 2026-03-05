import { create } from 'zustand'
import { getMovies, getSeats } from '../api/getData.js'

const movies = await getMovies()

export const useMovies = create((set) => ({

    moviesData: movies['movies'],

}))



