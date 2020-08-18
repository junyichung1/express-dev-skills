var express = require('express');
const skillsCtrl = require('../controllers/skills');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/students', skillsCtrl.index)
router.get('/skillset/:language', skillsCtrl.show)

module.exports = router;
