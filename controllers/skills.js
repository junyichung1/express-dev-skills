const GaStudent = require('../models/skill');
// GaStudent now equals module.exports in models/skill

function index(req, res) {
    res.render('skills/index', {
        cohort: GaStudent.students
});
}

function show(req, res) {
    res.render('skills/show', {
        expertise: GaStudent.getSkill(req.params.language),
        expert: req.params.language,
        cohort: GaStudent.student
});
}

module.exports = {
    index,
    show
}