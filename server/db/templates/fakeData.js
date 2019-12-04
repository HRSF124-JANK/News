const Faker = require('faker');

module.exports = {
  date: Faker.date.past(),
  source: Faker.company.companyName(),
  title: Faker.lorem.words(),
  thumbnail: Faker.image.imageUrl(),
  body: Faker.lorem.paragraphs(),
  views: Math.floor(Math.random() * 1000)
}
