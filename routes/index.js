var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mega News Network Base API. Created by Festus Yeboah",
  });
});

module.exports = router;
