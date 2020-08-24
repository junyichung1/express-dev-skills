const skills = [
    {skill: 'javascript', learned: false, shortcut: 'js'},
    {skill: 'cascading style sheets ', learned: false, shortcut: 'css',},
    {skill: 'hypertext markup language', learned: false, shortcut: 'html'},
    {skill: 'model view controller', learned: false, shortcut: 'mvc'}
];


module.exports = {
    getAll,
    getSkill,
    create,
    deleteSkill,
    update,
    
}

function update(shortcut, updatedSkill) {
    updatedSkill.shortcut = updatedSkill.skill.split(' ').map(function(item){return item[0]}).join('');
    const skillsIdx = skills.findIndex(function(obj) {

       return (obj.shortcut === shortcut)
    });
    
    skills[skillsIdx] = updatedSkill;
    
}
function deleteSkill(shortcut) {
    
    const idx = skills.findIndex(function(obj) {
        return (obj.shortcut === shortcut)
        })
    skills.splice(idx, 1);
        
}
    // const idx = skills.findIndex(obj => obj.shortcut === shortcut)
    // skills.splice(idx, 1);
    

function create(newSkill) {
    
    newSkill.learned = false;
    // newSkill.shortcut = (Date.now() % 1000000).toString()
    newSkill.shortcut = newSkill.skill.split(' ').map(function(item){return item[0]}).join('');
    skills.push(newSkill);

}

 function getSkill(skillset) {
    return skills.find(function(obj) {
        return obj.shortcut === skillset;
      })
    }

    function getAll() {
        return skills;
    }