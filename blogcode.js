let people = [{name: "Nolan", age: 28},
  {name: "buzz", age: 6},
  {name: "woody", age: 50},
  {name: "Chelsea", age: 30},
  {name: "mr potato head", age: 21},
  {name: "rex", age: 18},
  {name: "Evan", age: 26}];

// console.log(people)
//
// people.sort((a, b) => (a.age-b.age))
// console.log(people)



// let capitalNames = people.map(person => ({name: (person.name.charAt(0).toUpperCase() + person.name.slice(1)), age: person.age}))
// .sort((a,b) => (a.name.localeCompare(b.name)));
//
//
//
let capitalNames = people.map(person => ({name: (person.name.charAt(0).toUpperCase() + person.name.slice(1)), age: person.age}))
.sort((a,b) => (a.name.localeCompare(b.name))).filter(person => person.age >= 21);

// const companyNames = companies.map(function(company) {
//   return company.name
// });

// let capitalNames = people.map(function(person) {
//   return {name: (person.name.charAt(0).toUpperCase() + person.name.slice(1)), age: person.age}
// }).sort(function(a,b) {
//   return (a.name.localeCompare(b.name))
// }).filter(function(person){
//   return (person.age >= 21)
// })



console.log(capitalNames)
