class Pet {
  constructor(name, age) {
    console.log("In Pet constructor");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating.`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesleft = 9) {
    console.log("In Cat constructor");
    super(name, age);
    this.livesleft = livesleft;
  }
  meow() {
    return "Meowwwwww!";
  }
}

class Dog extends Pet {
  bark() {
    return "Woof! Woof!";
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}
