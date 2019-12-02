const db = require('./index.js');
const News = require('./news.js');
const Faker = require('faker');

const companyNames = require('./templates/companyNames');
const fakeData = require('./templates/fakeData');

const createNews = () => {
  let newsObjects = []
  console.log('creating new collections...');
  return companyNames.then( (cN) => {
    Object.entries(cN).forEach( (entry, idx) => {
      let articleNumber = Math.floor(Math.random() * 10);
      console.log(`creating ${articleNumber} news articles for ${entry[0]}`)
      for (var i = 0; i < articleNumber; i++) {
        let newNews = {
          company: entry[0],
          symbol: entry[1],
          date: Faker.date.past(),
          source: "url",
          title: Faker.lorem.words,
          thumbnail: Faker.image.imageUrl,
          body: Faker.lorem.paragraphs,
          views: Faker.helpers.randomNumber
        }
        newsObjects.push(newNews)
      }
    })
    return newsObjects
  })
}


const dbSetup = () => {
  News.deleteMany({}, (err) => {
    if (err) {
      throw err
    }
    let newData = createNews();
    newData.then( (newData) => {
      News.create(newData, (err, res) => {
        if (err) {
          throw err
        }
        db.then((res) => {
          console.log("created db")
          res.disconnect()
        })
      })
    })
  })

}

dbSetup();
