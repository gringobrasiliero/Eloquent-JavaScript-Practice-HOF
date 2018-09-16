
// Exercise 1
let SCRIPTS = require('./scripts.js');

// Exercise 4



// Function Taken from Chapter 5 of Eloquent JS
// countBy(items, groupName) counts the characters that belong to each script
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}



// Function Taken from Chapter 5 of Eloquent JS
// characterScript(code) figures out what script a piece of text is using.
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}



// Function I wrote for the exercise
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0)); //codePointAt() returns the unicode code point value
    return script ? script.direction : "none"; //returns the direction of each char of the string
  }).filter(({name}) => name != "none"); // filters out the characters that have no direction
return counted.reduce((a,b) => a.count > b.count ? a : b).name; // returns the dominant direction.
}


console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
