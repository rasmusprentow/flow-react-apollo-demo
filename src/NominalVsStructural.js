// @flow

const f1 = (input: {a: number}) => input.a;
const f2 = (input: A) => input.a;

class A {
  a: number;
}
class B {
  a: number;
}

f1({a: 2});
// $ExpectError
f1({b: 2});
f1(new A());
f1(new B());

// $ExpectError
f2({a: 2});
f2(new A());
// $ExpectError
f2(new B());
