abstract class Animal {
  // 抽象类公共方法
  eat() {
    console.log('eat');
  }
  // 多态
  abstract sleep(): void;
}

class Dog extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  run() {}
  sleep() {
    console.log('dog sleep');
  }
}

class Cat extends Animal {
  sleep() {
    console.log('Cat sleep');
  }
}

let dog = new Dog('wan');
let cat = new Cat();

let animals: Animal[] = [dog, cat];
animals.forEach(i => {
  i.sleep();
});

class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}

class myWorkFlow extends WorkFlow {
  next() {
    return this;
  }
}

new myWorkFlow()
  .step1()
  .step2()
  .next();
