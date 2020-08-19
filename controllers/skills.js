const CodingSkills = require('../models/skill');
// codingSkills now equals module.exports in models/skill

function index(req, res) {
    res.render('skills/index', {
        cohort: CodingSkills.skills
});
}

function show(req, res) {
    res.render('skills/show', {
        expertise: CodingSkills.getSkill(req.params.skillset),
        expert: req.params.skillset,
        cohort: CodingSkills.skill
});
}

module.exports = {
    index,
    show
}