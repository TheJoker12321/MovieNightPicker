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

app.get('/get/seats', async (req, res) => {

    const seats = JSON.parse(await fs.promises.readFile('server/DB/seats.json', 'utf-8'))

    res.status(200).json({

        seats
        
    })
})


app.listen(3001, () => {

    console.log('SERVER RUNNING');
    
})