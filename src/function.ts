import { type } from 'os';

/**
 * 定义并实现
 */

// function
function add1(x: number, y: number) {
  return x + y;
}

/**
 * 只定义
 */

// 变量
let add2: (x: number, y: number) => number;

// 类型别名
type add3 = (x: number, y: number) => number;

// 接口
interface add4 {
  (x: number, y: number): number;
}

// 可选参数
function add5(x: number, y?: number) {
  return y ? x + y : x;
}

// 默认值
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}

//
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}
// console.log(add7(1, 2, 3, 4, 5));

function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === 'string') {
    return rest.join('');
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur);
  }
}

console.log(add8(1,2,3));
console.log(add8('hello',' typescript'));
