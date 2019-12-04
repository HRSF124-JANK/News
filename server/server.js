const express = require('express')
const path = require('path')
const app = express()
const News = require('./db/news.js');

app.use(express.json())
app.use(express.urlencoded())
app.use('/', express.static(path.resolve(__dirname, '../public')))
app.get('/getData', (req, res) => {
  let symbol = req.url.split('=')[1]
  News.find({symbol: symbol}, (err, data) => {
    if (err) {
      res.writeHead(404)
      throw err
      res.end()
    } else {
      res.writeHead(200)
      res.end(JSON.stringify(data))
    }
  })
})

module.exports = app
