import { join } from 'node:path'
const express = require('express')
const cors = require('cors')
import { CorsOptions } from 'cors'

//routes:
import shows from './routes/shows'
import placeholder from './routes/placeholder'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors('*' as CorsOptions))

server.get('/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy']
  const index = Math.floor(Math.random() * greetings.length)
  console.log(index)
  res.json({ greeting: greetings[index] })
})

server.get('/testingapiroute', (req, res) => {
  const placeholderstrings = ['this is the home route', 'slashy', '/']
  const rando = Math.floor(Math.random() * placeholderstrings.length)
  res.json({ placeholderstrings: placeholderstrings[rando] })
})

// server.get('/', (req, res) => {})

server.use('/shows', shows)
server.use('*', placeholder)

export default server
