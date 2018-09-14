
function loop(start,test,update,body) {
  for (let value = start; //Gets start value
       test(value); //Runs test function on current loop value. checks to see if the current value is greater than 0
       value = update(value)) { //updates the value by -1
         body(value);
       }
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
