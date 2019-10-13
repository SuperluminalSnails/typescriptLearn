// interface List {
//   id: number;
//   name: string;
// }

// interface Result {
//   data: List[];
// }
// function render(result: Result) {
//   result.data.forEach(value => {
//     console.log(value.id, value.name);
//   });
// }

// let result = {
//   data: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
// };

// interface StringArray {
//   [index: number]: string;
// }

// let chars: StringArray = ['A', 'B'];

// // render(result);
// console.log(chars);

// interface Add {
//   (x: number, y: number): number;
// }

// // type Add = (x: number, y: number) => number;

// let intefaceadd: Add = (a, b) => a + b;

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = '1.0';
  lib.doSomething = () => {};
  return lib;
}

let l1 = getLib();
let l2 = getLib();

l2.version = '3.0';
console.log(l1.version);
console.log(l2.version);