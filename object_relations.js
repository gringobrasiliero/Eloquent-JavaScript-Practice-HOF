let store = { users: [], items: [] };


function createUser() {
let userId = 0;
return class User {
    constructor(name) {
        this.id = ++userId;
        this.name = name;

        // insert in the user to the store
        store.users.push(this);
    }

items() {
  return store.items.filter(item => item.userId === this.id)
}

}
}


function createItem() {
  let itemId = 0;
return class Item {
    constructor(name, price, user) {
        this.id = ++itemId;
        this.name = name;
        this.price = price;
        if (user) {
            this.userId = user.id;
        }

        // insert in the item to the store
        store.items.push(this);
    }
    setUser(user) {
        this.userId = user.id;
    }

user() {
  return store.users.find(user => user.id === this.userId) //find is same as filter but only returns first result.
}

}
}

const User = createUser();
const Item = createItem();
let bobby = new User('bobby');
let sally = new User('sally');
let trousers = new Item('trousers', 24, bobby);
let tshirt = new Item('tshirt', 8, bobby);
let socks = new Item('socks', 3, sally);
console.log(store)

let bob = store.users[0];
console.log(bob.items())

let thing = store.items[0];
console.log(thing.user())
