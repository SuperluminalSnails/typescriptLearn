interface Human {
  name: string;
  eat(): void;
}

// 继承
interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

// 继承多个接口
interface Boy extends Man, Child {}

// 实现继承的接口
let boy: Boy = {
  name: 'wan',
  eat() {},
  run() {},
  cry() {}
};

class Auto {
  state: number = 1;
}

// 抽取了类的定义
interface AutoInterface extends Auto {}

class C implements AutoInterface {
  state = 2;
}

// Bus 继承 Auto ,满足 AutoInterface 的约束
class Bus extends Auto implements AutoInterface{

}