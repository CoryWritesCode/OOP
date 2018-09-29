  // Object Literals, Pseudo Classes and methods

      // ES6 way

class Person {
  constructor(name, city, age) {
  this.name = name;
  this.city = city;
  this.age = age;
  }

  sayHello() {
    console.log(`Hello my name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
  }
}

// ES5 way to do it

// function Person(name, city, age) {
//   this.name = name;
//   this.city = city;
//   this.age = age;
// }

// Person.prototype.sayHello = function() {
//   console.log(`Hello my name is ${this.name}. I am ${this.age} years old and live in ${this.city}`);
  
// }

let person1 = new Person('Brianna', 'Bham', 28);
let person2 = new Person('Ray', 'Bham', 25);
let person3 = new Person('Ramsey', 'Bham', 27);
let person4 = new Person('Will', 'Bham', 23);
let person5 = new Person('Samuel', 'Bham', 22);


      // Old timey way to do it.
// let person1 = {
//   name: 'Brianna',

//   sayHello: function() {
//     console.log(`Hello my name is ${this.name}`);
    
//   }
// }

// let person2 = {
//   name: 'Ray',

//   sayHello: function() {
//     console.log(`Hello my name is ${this.name}`);
    
//   }
// }

// let person3 = {
//   name: 'Ramsey',

//   sayHello: function() {
//     console.log(`Hello my name is ${this.name}`);
    
//   }
// }

// let person4 = {
//   name: 'Will',

//   sayHello: function() {
//     console.log(`Hello my name is ${this.name}`);
    
//   }
// }

// let person5 = {
//   name: 'Samuel',

//   sayHello: function() {
//     console.log(`Hello my name is ${this.name}`);
    
//   }
// }

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();


  // Inheritance

class Vehicle {
  constructor(type, make, wheels) {
    this.type = type;
    this.make = make;
    this.wheels = wheels;
  }

  aboutVehicle() {
    console.log(`Here is a ${this.type} made by ${this.make} with ${this.wheels} wheels. Fancy I know.`);
    
  }
}

class Truck extends Vehicle {
  constructor(type, make, wheels) {
    super(type, make, wheels);
    doors: 2;
    bed: true;
  }

  aboutVehicle() {
    console.log(`Here is a ${this.type} made by ${this.make} with ${this.wheels} wheels. Fancy I know. I also have ${this.doors} and it's ${this.bed} that I have a bed.`);
    
  }
}

class Sedan extends Vehicle {
  constructor(type, make, wheels, size) {
    super(type, make, wheels);
    doors: 4;
    mpgRating: 'Good';
    this.size = size;
  }

  aboutVehicle() {
    console.log(`Here is a ${this.type} made by ${this.make} with ${this.wheels} wheels. Fancy I know. I also have ${this.doors} and a ${this.mpgRating} mpg rating. It is a ${this.size} vehicle.`);
    
  }
}

class Motorcycle extends Vehicle {
  constructor(type, make, wheels) {
    super(type, make, wheels);
    goBack: false;
    doors: 0;
    steering: 'handlebars';
  }

  aboutVehicle() {
    console.log(`Here is a ${this.type} made by ${this.make} with ${this.wheels} wheels. Fancy I know. I also have ${this.doors}, it is ${this.goBack} that it can go in reverse and it steers with the ${this.steering}.`);
    
  }
}

let vehicle1 = new Truck('truck', 'Toyota', 6);
let vehicle2 = new Sedan('sedan', 'Honda', 4, "small");
let vehicle3 = new Motorcycle('motorcycle', 'Harley', 2);

vehicle1.aboutVehicle();
vehicle2.aboutVehicle();
vehicle3.aboutVehicle();