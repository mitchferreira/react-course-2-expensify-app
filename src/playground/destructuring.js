//
// Object destructuring
//

// const person = {
//   name: "Mitchell",
//   age: 23,
//   location: {
//     city: "Guelph",
//     temp: 24
//   }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// Array desctructuring
//

const address = ["25 Waterloo Ave", "Guelph", "Ontario", "N1G-something"];
const [street, city, province, postalCode] = address;
console.log(`You are in ${city} ${province}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [coffee, , price] = item;

console.log(`A medium ${coffee} costs ${price}`);
