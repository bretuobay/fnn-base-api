const express = require("express");
const router = express.Router();
const faker = require("faker");

function generateWeatherData(city) {
  return {
    coord: { lon: faker.random.number(180), lat: faker.random.number(180) },
    temp: faker.random.number({ min: 273, max: 315 }),
    feels_like: faker.random.number(45),
    temp_min: faker.random.number(273),
    temp_max: faker.random.number(300),
    pressure: faker.random.number(100),
    humidity: faker.random.number(100),
    name: city || faker.address.city(),
  };
}

router.get("/:city", function (req, res, next) {
  res.json(generateWeatherData(req.params.city));
});

module.exports = router;
