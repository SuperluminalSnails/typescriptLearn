// 类定义
class Dog {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  readonly legs: number = 4;
  static food: string = 'bones';
  run() {}
}

// console.log(Dog.prototype);
let dog = new Dog('wangwang');
// console.log(dog);
// console.log(Dog.food);

console.log(dog.legs);

// 继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
  color: string;
}
