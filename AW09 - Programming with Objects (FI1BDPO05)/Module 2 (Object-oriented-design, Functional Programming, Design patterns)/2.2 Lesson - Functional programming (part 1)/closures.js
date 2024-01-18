const Student = ({ name, age, gender, university }) => {
    var _name = name;
    var _age = age;
    var _gender = gender;
    var _university = university

    return {
        getName: () => _name,
        getAge: () => _age,
        getGender: () => _gender,
        getUniversity: () => _university,

        setUniversity: newUniversity => _university = newUniversity,
    };
}

const me = Student({ name: 'Mark', age: 22, gender: 'male', university: 'Oxford' });
console.log(me.getUniversity());
me.setUniversity("Cambridge");
console.log(me.getUniversity());