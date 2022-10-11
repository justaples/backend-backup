const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = 8000
const postRoutes = require('./routes/postRoutes')
require('./db/connection')

app.use(morgan('tiny'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/post', postRoutes)

app.get('/', (req,res) =>{
    res.json('Welcome to the blog!')
})

app.listen(PORT, () =>{
    console.log('Let\'s get a job on port', PORT)
})