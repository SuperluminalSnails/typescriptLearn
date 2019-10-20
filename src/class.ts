// 抽象类
abstract class Animal {
    eat() {
        console.log('eat');
    }
    abstract sleep(): void;
}

// let animal = new Animal();
class Dog extends Animal {
    constructor(name: string) {
        super();
        this.name = name;
    }
    name: string;
    sleep() {
        console.log('dog sleep');
    }
}

let dog = new Dog('wanwan');
// dog.eat();

class Cat extends Animal {
    sleep() {
        console.log('cat sleep');
    }
}

let cat = new Cat();

let animals: Animal[] = [dog, cat];

animals.forEach(i => {
    i.sleep();
});

// this 类型
class workFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}

new workFlow().step1().step2();

// this 继承

class myWorkFlow extends workFlow {
    next() {
        return this;
    }
}

new myWorkFlow()
    .step1()
    .step2()
    .next();
