const express = require("express");
const router = express.Router();
const faker = require("faker");

function generateFakeNews() {
  const numberOfItems = Math.floor(Math.random() * 40 + 10);

  return [...Array(numberOfItems)].map(() => ({
    source: faker.company.companyName(),
    author: faker.name.findName(),
    title: faker.lorem.words(),
    description: faker.lorem.sentence(),
    url: faker.internet.url(),
    urlToImage: faker.image.image(),
    publishedAt: faker.date.past(),
    content: faker.lorem.paragraphs(),
  }));
}

router.get("/:category/:channel", function (req, res, next) {
  res.json(generateFakeNews());
});

module.exports = router;
