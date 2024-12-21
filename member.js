function skillsMember(){
    var member = {
        name: 'John',
        age: 25,
        skills: ['HTML', 'CSS', 'JavaScript']
    };

    return {
        get: function() {
            return member;
        },
        set: function(name, age, skills) {
            if (name) {
                member.name = name;
            }

            if (age) {
                member.age = age;
            }

            if (skills) {
                member.skills = skills;
            }
        }
    }
}