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
    req.body.learned = !!req.body.learned;

    CodingSkills.update(req.params.skillset, req.body)
    shortcut = req.body.skill.split(' ').map(function(item){return item[0]}).join('');
    res.redirect(`/skills/${shortcut}`);
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
        cohort: CodingSkills.getAll()
});
}

function show(req, res) {
    res.render('skills/show', {
        expertise: CodingSkills.getSkill(req.params.skillset),
        expert: req.params.skillset,
        cohort: CodingSkills.getAll()
    
});
}

