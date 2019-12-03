const mongoose = require('mongoose');
const path = require('path');
const News = require(path.resolve(__dirname, '../../../server/db/news.js'));

process.env.TEST_SUITE = "news-test";

describe('News collection should', () => {
  describe('have CRUD functionality across Models', () => {
    let news;

    it('should create and read models properly', async (done) => {
      await new News({
        company: "asdf"
      }).save();

      const news = await News.findOne({ company: "asdf" })
      expect(news.company).toBe('asdf')
      done()
    })

    it("should look up a model and update an attribute properly", async (done) => {
      await new News({
        company: "asdf"
      }).save();

      const updatedNews = await News.updateOne({company: "asdf"}, {symbol: "AAA"})
      const news = await News.findOne({ company: "asdf" })
      expect(news.symbol).toBe("AAA")
      done()
    })

    it('should delete a model', async (done) => {
      await new News({
        company: "asdf"
      }).save();
      await News.deleteOne({})
      const news = await News.findOne({});
      expect(news).toBe(null)
      done()
    })

  })
})
