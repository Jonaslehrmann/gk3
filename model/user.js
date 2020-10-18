//definerer model-klasse for User
class User {
    constructor(firstName, lastName, age,interest,match,image) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.interest = interest;
        this.match = match;
        this.image = image;
    }
}

class FreeUser extends User {
    constructor(firstName, lastName, age,interest,match,image){
    super(firstName, lastName, age,interest,match,image)
    }
}

class PaymentUser extends User{
    constructor(firstName, lastName, age,interest,match,image,creditCard){
    super(firstName, lastName, age,interest,match,image)
    this.creditCard = creditCard
}
}
//eksporter user
module.exports = User;
module.exports = FreeUser;
module.exports = PaymentUser;
