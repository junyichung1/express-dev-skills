const students = [
    {student: 'jessica', skill: 'javascript', id: 70933},
    {student: 'rashel', skill: 'css', id: 43254},
    {student: 'colin', skill: 'html', id: 54098},
    {student: 'junyi', skill: 'mvc', id: 08453}
];


module.exports = {
    students,
    getSkill
}

 function getSkill(language) {
    return students.find(function(obj) {
        return obj.skill === language;
      }).student
    }