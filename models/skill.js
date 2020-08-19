const skills = [
    {skill: 'javascript', learned: false},
    {skill: 'css', learned: false},
    {skill: 'html', learned: false},
    {skill: 'mvc', learned: false}
];


module.exports = {
    skills,
    getSkill
}

 function getSkill(skillset) {
    return skills.find(function(obj) {
        return obj.skill === skillset;
      }).skill
    }