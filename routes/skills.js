var express = require('express');
const skillsCtrl = require('../controllers/skills');
var router = express.Router();

/* GET users listing. */

router.get('/', skillsCtrl.index)
router.get('/:skillset', skillsCtrl.show)

module.exports = router;
