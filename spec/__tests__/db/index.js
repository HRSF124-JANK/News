const mongoose = require('mongoose');
const News = require('../../../server/db/news.js');

process.env.TEST_SUITE = "news";

describe('News collection should', () => {
  describe('READ Models', () => {
    let news;

    // beforeEach(async () => {
    //   news = await News.find({})
    // })

    it('finds at least 1 news article per company', (done) => {
      News.find({})
        .then( (data) => {
          console.log(data)
          expect(data.length).toBeGreaterThan(500)
          done();
        })
    })
  })
})
