interface DogInterface {
  run(): void;
}

interface CatInterface {
  jump(): void;
}

// 交叉类型
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
};

let a: number | string = 'a'; // 限制类型
let b: 'a' | 'b' | 'c'; // 限制取值范围
