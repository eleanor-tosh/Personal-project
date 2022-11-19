const path = require('path')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))
server.use('/api/v1/dog', routes)
server.use('/api/v1/mydetails', routes)
server.use('/api/v1/shows', routes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
