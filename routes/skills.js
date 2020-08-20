var express = require('express');
const skillsCtrl = require('../controllers/skills');
var router = express.Router();

/* GET users listing. */

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:skillset', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:skillset', skillsCtrl.delete);
router.get('/:skillset/edit', skillsCtrl.edit);
router.put('/:skillset', skillsCtrl.update);

module.exports = router;
