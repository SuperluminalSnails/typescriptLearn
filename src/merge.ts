// interface A {
//   x: number;
//   foo(bar: number): number; // 5
//   foo(bar: 'a'): number; // 2 有字面量定义的排在首位
// }

// interface A {
//   y: number;
//   foo(bar: string): string; // 3 // 接口内按照声明顺序排序
//   foo(bar: number[]): number[];  // 4
//   foo(bar: 'b'): number; // 1 有字面量定义的会排在首位，接口外后面的排在前面
// }

// let merge: A = {
//   x: 1,
//   y: 2,
//   foo(bar: any) {
//     return bar;
//   }
// };

// console.log(merge);

function Lib() {}
namespace Lib {
  export let version = '1.0';
}
console.log(Lib.version);

class C {}
namespace C {
  export let state = 1;
}

console.log(C.state);

enum Color {
  Red,
  Yellow,
  Bule
}

namespace Color {
  export function mix() {}
}

console.log(Color);
