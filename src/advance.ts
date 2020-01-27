type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';
// 条件类型

type T1 = TypeName<string>;
type T2 = TypeName<string[]>;
type T3 = TypeName<string | string[]>;

type Diff<T, U> = T extends U ? never : T;

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>;
// Diff<"a","a"|"e"> Diff<"b","a"|"e"> Diff<"c","a"|"e">
// never | "b" | "c"
// "b" | "c"
