const skills = [
    {skill: 'javascript', learned: false, shortcut: 'js'},
    {skill: 'cascading style sheets ', learned: false, shortcut: 'css',},
    {skill: 'hypertext markup language', learned: false, shortcut: 'html'},
    {skill: 'model view controller', learned: false, shortcut: 'mvc'}
];


module.exports = {
    skills,
    getSkill,
    create,
    deleteSkill,
    update,
    
}

function update(shortcut, updatedSkill) {
    const skill = skills.find(function(obj) {
        (obj.shortcut === shortcut)
        })
        Object.assign(skill, updatedSkill);
}
function deleteSkill(shortcut) {
    
    const idx = skills.findIndex(function(obj) {
        (obj.shortcut === shortcut)
        })
    skills.splice(idx, 1);
        
}
    // const idx = skills.findIndex(obj => obj.shortcut === shortcut)
    // skills.splice(idx, 1);
    

function create(newSkill) {
    
    newSkill.learned = false;
    newSkill.shortcut = (Date.now() % 1000000).toString()
    // skills.shortcut = newSkill.split(' ').map(function(item){return item[0]}).join('');
    skills.push(newSkill);

}

 function getSkill(skillset) {
    return skills.find(function(obj) {
        return obj.shortcut === skillset;
      }).skill
    }