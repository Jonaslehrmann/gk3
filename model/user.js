//definerer model-klasse for User
class User {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
}

//eksporter user
module.exports = User;