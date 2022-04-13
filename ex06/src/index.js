const firstName = (firstName) => firstName.toUpperCase();
const lastName = (lastName) => lastName.toLowerCase();


console.log(firstName("Ana"));
console.log(lastName("Brdar"));


exports.firstName = firstName;
exports.lastName = lastName;
