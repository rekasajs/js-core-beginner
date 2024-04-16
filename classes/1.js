class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
  }
}

const person1 = new Person('Роман', 20, 'Беларусь');
const person2 = new Person('Александр', 25, 'Украина');

person1.displayInfo();
person2.displayInfo();
