const request = require('supertest');
const app = require('./../../../server/server.js');
const path = require('path')
const News = require(path.resolve(__dirname, '../../../server/db/news.js'));

describe('testing the test', () => {
  it('should get a response from the get method', async (done) => {
    await News.create({symbol: "MMM"})
    request(app).get('/getData?company=MMM').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    })
  })

  it('should receive data from a mongoose query', async (done) => {
    await News.create({symbol: "MMM"})
    request(app).get('/getData?company=MMM').then((response) => {
      expect(JSON.parse(response.text).length).toBeGreaterThan(0)
      done()
    })
  })

  it('should send a 404 if company not found', (done) => {
    request(app).get('/getData?company=NOCOMPANY').then((response) => {
      expect(response.statusCode).toBe(404);
      done();
    })
  })
})
