// what is class in javascript

// classes in program code template for create obejct
// those object will have some state (variable) and (method), function inside it.

// class code Syntax

class className {
  method() {}
}

// this class keys word to use create class and this name of className and one method inside this blocks

// Class Definition:
class ToyotaCar {
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
}

// Creating an Instance:
let fortuner = new ToyotaCar();

// Using the Methods:
// fortuner.start(); // Output: "start"
// fortuner.stop(); // Output: "stop"

// in this class we have a two method start and stop
// then the new key Word create a object of Toyota class

// Constructor

// in classes we have a method Constructor and is name also Constructor
// Constructor are used to intitalize property and object

// Constructor Example
// let's say

class Enginner {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

// let newobject = new Enginner("name", 50);

// what is inheritance in classes
// inheritance passing down properties and  method from parent class to child class

//  Syntax of passing properties like this:
class classname {
  // methods ()
}

// antoher class

class AnotherClassName extends className {}

// see this example

class AboutMe {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

class MoreAboutMe {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

// see this example i want to use same data in both classes but we are doing repeatation  but repeatation not perfect way to write code. so we are use extends key words to passing down properties and method from parent class to child class .

// extends Example:

class doctor {
  Hello() {
    console.log("hello");
  }
}

class AboutDoctor extends doctor {}

// let object = new AboutDoctor();

// see this example our code so redeable and in previous example little bit repeatation but in this code have no repeatation and this working perfectly.

// let's go and learn classes in detail

class person {
  eat() {
    console.log("eat");
  }
  work() {
    console.log("work");
  }
}

class AnotherPerson extends person {
  work() {
    console.log("first work and then sleep");
  }
}

let obj = new AnotherPerson();

// check this both class we have two same method in both classes when we are consoling obj.AnotherPerson
// you see the nearest method work who same name. this class method override.

// next we are learing super keyword
// the super key word is used to call the constructor to acces parent properties and method

// the syntax of super key word

// super(arg);

// super.parentmethod(arg);

// let's write example to better understanding

class personName {
  constructor(name) {
    this.name = name;
    this.item = "chemical";
  }
  eat() {
    console.log("eat");
  }
}

class PersonBranch extends personName {
  constructor(name) {
    super(name); // to invoke parent class constructor
  }
}

let newObject = new PersonBranch("anash");

// let's do some practise in classes

// As a frontend developer at Amazon, let's say your boss provides you with data related to products and asks you to implement it using classes in JavaScript. Here's a simplified example:

class Product {
  constructor(id, name, age, category) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.category = category;
  }

  displayInfo() {
    console.log(`Id ${this.id}`);
    console.log(`Product Name ${this.name}`);
    console.log(`price ${this.price}`);
    console.log(`category ${this.category}`);
    console.log(`---------------------------`);
  }
}

const productData = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
  { id: 2, name: "Book", price: 19.99, category: "Books" },
  { id: 3, name: "Headphones", price: 79.99, category: "Electronics" },
];

const IterateEachProduct = productData.map(
  (item) => new Product(item.id, item.name, item.price, item.category)
);

// IterateEachProduct.forEach((element) => {
//   element.displayInfo();
// });

// the product class is defined that takes constructor paraemeter for the product id,name,price, catogory
// there is a display method to log about product
// Finally, a loop is used to display information about each product.

// This way, the data is organized using a class, making it easier to manage and manipulate. Each product is represented as an instance of the Product class, and you can easily extend or modify the class as needed.

// Second Example
class Items {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  viewDate() {
    console.log(`Item Id: ${this.id}`);
    console.log(`Item Name: ${this.name}`);
    console.log(`Item Price: ${this.price}`);
    console.log(`Category: ${this.category}`);
    console.log(`---------------------------`);
  }
}

const myData = [
  { id: 101, name: "Gaming Laptop", price: 1499.99, category: "Electronics" },
  { id: 102, name: "Running Shoes", price: 79.99, category: "Sports" },
  // Add more items as needed
];

class AnotherDate extends Items {
  constructor(id, name, price, category) {
    super(id, name, price, category);
  }
}

const iterateEachDate = myData.map(
  (element) =>
    new Items(element.id, element.name, element.price, element.category)
);

iterateEachDate.forEach((item) => item.viewDate());

const newDate = [
  {
    id: 103,
    name: "Bluetooth Speaker",
    price: 89.99,
    category: "Electronics",
  },
];

// Creating an instance of AnotherDate class
const newDateInstance = new AnotherDate(
  newDate[0].id,
  newDate[0].name,
  newDate[0].price,
  newDate[0].category
);

// Displaying information about the new date
newDateInstance.viewDate();
