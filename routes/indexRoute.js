var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { navLocation: 'main' }); // here we render
});

//internationalization
const langController = require("../controllers/langController");
router.get("/changeLang/:lang", langController.changeLang);

module.exports = router;
