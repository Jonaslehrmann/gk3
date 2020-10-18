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
//laver en inheritance, hvor FreeUser ikke har nogle ekstra attributter
class FreeUser extends User {
    constructor(firstName, lastName, age,interest,match,image){
    super(firstName, lastName, age,interest,match,image)
    }
}
//laver en ny inheritance, hvor der er blevet tilføjet kreditkort til PaymentUser
class PaymentUser extends User{
    constructor(firstName, lastName, age,interest,match,image,creditCard){
    super(firstName, lastName, age,interest,match,image)
    this.creditCard = creditCard
}
}
//eksporterer user, så det kan bruges i de andre dokumenter
module.exports = User;
module.exports = FreeUser;
module.exports = PaymentUser;
