const express = require('express')
const path = require('path')
const app = express()
const News = require('./db/news.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use('/', express.static(path.resolve(__dirname, '../public')))
app.get('/getData', (req, res) => {
  News.find({id: req.query.id}, (err, data) => {
    if (err || data.length === 0) {
      res.writeHead(404)
      res.end()
    } else {
      res.writeHead(200)
      res.end(JSON.stringify(data))
    }
  })
})

app.post('/addViews', (req,res) => {
  News.find({id: req.query.id}, (err, data) => {
    if (err || data.length === 0) {
      res.writeHead(404)
      res.end()
    } else {
      res.writeHead(200)
      data[req.body.idx].views = data[req.body.idx].views + 1
      data[req.body.idx].save()
      res.end("success!");
    }
  })
})

module.exports = app
