// Create
const person = {
  name: "Mark Makau",
  age: 30,
};

// Access
person.name;

// Change
person.age = 31;

// Add
person.country = "Kenya";

// Delete
delete person.age;

// loop through object
const entries = Object.entries(person);
for (let i = 0; i < entries.length; i++) {
  const [key, value] = entries[i];
  // console.log(key, value);
}

const people = [
  {
    name: "Mark",
    age: 31,
  },
  {
    name: "Brian",
    age: 28,
  },
  {
    name: "Kevin",
    age: 25,
  },
];

let oldest = people[0].age;
let oldestPerson = people[0].name;
for (let i = 0; i < people.length; i++) {
  if (people[i].age > oldest) {
    oldest = people[i].age;
    oldestPerson = people[i].name;
  }
}
//console.log(oldest);
//console.log(oldestPerson);

const car = {
  brand: "Toyota",
  model: "Corolla",
  speed: 0,
  start() {
    console.log("Car started");
  },
  drive(distance){
    console.log(`${this.brand} ${this.model} drove ${distance} miles`);
  },
  accelerate(speed){
    this.speed += speed;
  },
  info() {
    console.log(`Car brand is ${this.brand} and model is ${this.model}`);
  },
};
/*
car.info();
car.drive(100);
car.accelerate(30);
console.log(car.speed);
car.accelerate(20);
console.log(car.speed);


const person2 = {
    name: "Mark",
    
    address: {
        city: "Nairobi",
        country: "Kenya"
    },

    showLocation() {
       console.log(`${this.name} lives in ${this.address.city}, ${this.address.country}`);
    }
};

person2.showLocation();
*/



const shop = {
    name: "Mark's Shop",

    products: [
        { name: "Laptop", price: 80000 },
        { name: "Phone", price: 30000 },
        { name: "Headphones", price: 5000 }
    ],

    showProducts() {
        for (let  i = 0; i < this.products.length; i++){
          console.log (`${this.products[i].name} costs ${this.products[i].price}`);
        }
    }
};

shop.showProducts();