export async function getMovies() {

    return fetch('http://localhost:3001/get/movies')
    .then((data) => data.json())
}

export async function getSeats(idMovie) {

    return fetch(`http://localhost:3001/get/seats/${idMovie}`)
    .then((data) => data.json())
}


