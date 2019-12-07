const db = require('./index.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const newsSchema = new mongoose.Schema({
  company: String,
  id: Number,
  symbol: String,
  date: Date,
  source: String,
  title: String,
  thumbnail: String,
  body: String,
  views: Number
})

const News = mongoose.model('News', newsSchema)

module.exports = News;
