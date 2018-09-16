const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



////////////////////////////MAP//////////////////////

// Array of company names

// ES5
// const companyNames = companies.map(function(company) {
//   return company.name
// });

// ES6
const companyNames = companies.map(company => company.name);
console.log(companyNames)

// Company names with start and end dates

const companyNamesStartEnd = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)

console.log(companyNamesStartEnd)

const everyonesBirthday = ages.map(age => age + 1);
console.log(everyonesBirthday)

// Square ages
const squareAge = ages.map(age => Math.sqrt(age));
console.log(squareAge)

// Divide ages by 2
const divideAgeByTwo = ages.map(age => age / 2)
console.log(divideAgeByTwo)

// Square and divide by 2
const squareAndDivideByTwo = ages.map(age => Math.sqrt(age))
                                .map(age => age/ 2)
console.log(squareAndDivideByTwo)