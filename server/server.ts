import { join } from 'node:path'
const express = require('express')
const cors = require('cors')
import { CorsOptions } from 'cors'

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

export default server
