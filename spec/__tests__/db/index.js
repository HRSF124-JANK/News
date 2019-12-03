const mongoose = require('mongoose');
const path = require('path');
const News = require(path.resolve(__dirname, '../../../server/db/news.js'));
const dbSetup = require(path.resolve(__dirname, '../../../server/db/seed.js'));

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
      let news = await News.find({});
      expect(news.length).toBe(1)

      await News.deleteOne({})
      news = await News.find({});
      expect(news.length).toBe(0)
      done()
    })

  })
})
// 
// describe('News collection seed function', () => {
//   // Think about this more. which db is it hitting?
//   it('should properly store an appropriate amount of models with correct data', async (done) => {
//     dbSetup();
//     const data = await News.find({});
//     console.log(data)
//     expect(data.length).toBeGreaterThan(100);
//     expect(data[0].symbol).not.toBeUndefined();
//     expect(data[0].symbol).not.toBeNull();
//     done()
//   })
// })
