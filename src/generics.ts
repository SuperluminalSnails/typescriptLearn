// 定义泛型类，作用所有类的成员
class Log<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

// 只能是数字
let log1 = new Log<number>();
log1.run(1);

// 可以为任何类型
let log2 = new Log();
log2.run('1');

// 定义一个有length属性的接口
interface Length{
  length:number
}

// T 继承 Length接口 ，T 有length属性
function log<T extends Length>(value: T): T {
  // 这样就可以使用value.length
  console.log(value,value.length);
  return value;
}

console.log([1]);
console.log('132');

