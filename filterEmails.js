const customers = [{name: 'Ian', email: 'ian.candy@flatironschool.com'}, {name: 'Nolan'}, {name: 'Alice', email: false}, {name: 'Cernan', email: null}]

function withEmail(array) {
  let passed = []
  for(let element of array) {
    if (element.email) {
      passed.push(element.name)
    }
  }
  console.log(passed)
}

withEmail(customers) //['Ian']

const email = customers.filter(customer => customer.email)
console.log(email)
// Grab customers
// Iterate through each customers
// check for email
// if email === truthy
// append customer into email Array
// return email Array
