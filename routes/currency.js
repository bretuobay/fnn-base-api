const express = require("express");
const router = express.Router();
const faker = require("faker");

function generateExchangeRateData() {
  return [
    {
      currency: "EURO",
      value: faker.random.number(300),
    },
    {
      currency: "YEN",
      value: faker.random.number(300),
    },
    {
      currency: "DOLLAR",
      value: faker.random.number(300),
    },
  ];
}

router.get("/", function (req, res, next) {
  res.json(generateExchangeRateData());
});

module.exports = router;
