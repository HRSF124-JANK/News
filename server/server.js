const express = require('express')
const path = require('path')
const app = express()

app.use('/', express.static(path.resolve(__dirname, '../public')))
app.get('/', (req, res) => {
  res.writeHead(200)
  res.end()
})

module.exports = app
