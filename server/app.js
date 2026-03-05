import express from 'express'
import cors from 'cors'
import fs from 'fs'


const app = express()
app.use(cors())

app.get('/get/movies', async (req, res) => {

    const result = JSON.parse(await fs.promises.readFile('server/DB/data.json', 'utf-8'))
    
    res.status(200).json({

        movies: result
    })
    
})

app.get('/get/seats/:id', async (req, res) => {

    const { id } = req.params

    const seats = JSON.parse(await fs.promises.readFile('server/DB/seats.json', 'utf-8'))

    const realSeat = seats.filter((seat) => seat.id == id)
    
    res.status(200).json({

        result: realSeat

    })
})


app.listen(3001, () => {

    console.log('SERVER RUNNING');
    
})