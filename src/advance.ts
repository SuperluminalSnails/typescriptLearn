// 接口兼容性
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x: X = { a: 1, b: 2 };
let y: Y = { a: 1, b: 2, c: 3 };

x = y; // ok
// y = x;

// 函数兼容性
type Handler = (a: number, b: number) => void;

function hof(handler: Handler) {
  return handler;
}

// (1)参数个数
let handler1 = (a: number) => {};
hof(handler1); // ok
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2); // no

// 可选参数和剩余参数
let a = (p1: number, p2: number) => {};
let b = (p1?: number, p2?: number) => {};
let c = (...args: number[]) => {};

a = b; // ok
a = c; // ok

// b = c; // no
// b = a; // no

c = a; // ok
c = b; // ok

// (2)参数类型
let handler3 = (a: string) => {};
// hof(handler3);

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point2D {
  x: number;
  y: number;
}

let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d; // ok
// p2d = p3d; // no

// (3)返回值列席
let f = () => ({ name: 'Alice' });
let g = () => ({ name: 'Alice', location: 'beijing' });

f = g; // ok
// g = f; // no

function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

// 枚举类型兼容性
// enum Fruit {
//   Apple,
//   Banana
// }
// enum Color {
//   Red,
//   Yellow
// }
// let fruit: Fruit.Apple = 3;
// let no:number = Fruit.Apple;

// 类兼容性
class A {
  constructor(p: number, q: number) {}
  id: number = 1;
  private name: string = '';
}

class B {
  static s = 1;
  constructor(p: number) {}
  id: number = 2;
  private name: string = '';
}

let aa = new A(1, 2);
let bb = new B(1);

// bb = aa;
// aa = bb;

class C extends A {}
let cc = new C(1, 2);


// 泛型兼容性
interface Empty<T>{
  value:T
}


