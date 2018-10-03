let SCRIPTS = require('./scripts.js');


function characterScript(code) {
  for(let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;

    })){
      return script;
    }
  }
  return null
}

function countBy(items, groupName) {
  let counts=[];
  for(let item of items){
    let name=groupName(item);
    let known = counts.findIndex(c => c.name == name); //findIndex returns -1 if no element is found.
    if (known == -1) {
      counts.push({name, count: 1});
    }else{
      counts[known].count++;
    }
    }
    return counts;
  }

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
return scripts.reduce((a,b) => a.count > b.count ? a : b).name;
}





// Function I wrote for the exercise
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0)); //codePointAt() returns the unicode code point value
    return script ? script.direction : "none"; //returns the direction of each char of the string
  }).filter(({name}) => name != "none"); // filters out the characters that have no direction
return counted.reduce((a,b) => a.count > b.count ? a : b).name; // returns the dominant direction.
}


console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
