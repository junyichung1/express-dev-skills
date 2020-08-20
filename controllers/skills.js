const CodingSkills = require('../models/skill');
const { skills } = require('../models/skill');
// codingSkills now equals module.exports in models/skill

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function update(req, res) {
    req.body.done = !!req.body.done;
    CodingSkills.update(req.params.skillset, req.body)
    res.redirect(`/skills/${req.params.skillset}`);
}
function edit(req, res) {
    const expertise = CodingSkills.getSkill(req.params.skillset)
    res.render('skills/edit', {
        expertise
    })
}
function deleteSkill(req, res) {
    CodingSkills.deleteSkill(req.params.skillset)
    res.redirect('/skills');
} 
function create(req, res) {
    CodingSkills.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new')
}
function index(req, res) {
    res.render('skills/index', {
        cohort: CodingSkills.skills
});
}

function show(req, res) {
    res.render('skills/show', {
        expertise: CodingSkills.getSkill(req.params.skillset),
        expert: req.params.skillset,
        cohort: CodingSkills.skills
        
});
}

