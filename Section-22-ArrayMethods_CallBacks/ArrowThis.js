const person = {
    firstName: 'Fukurou',
    lastName: 'Massao',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function () {
        setTimeout( () => {
            console.log(this);
            console.log(this.fullName());
        }, 3000);
    },


}

console.log(person.fullName());

person.shoutName();