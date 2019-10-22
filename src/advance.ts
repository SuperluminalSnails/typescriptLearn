/** 基础类型推断 */
let a = 1; // 推断为number类型
let b = []; // 推断为any array
let c = [1]; // 推断为number array

// x推断为number类型 返回值推断为number类型
let d = (x = 1) => x + 1;

/** 最佳通用类型推断 */
// let e:number[] = [1];

/** 上下文类型推断 */
window.onkeydown = (event: Object) => {
  console.log(event);
};
