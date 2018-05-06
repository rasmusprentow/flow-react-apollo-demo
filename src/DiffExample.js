// @flow

type A = {|
  foo: number,
  bar: number,
|};

type B = {|
  bar: number,
|};

// $ExpectError
const diffAB: $Diff<A, B> = {foo: 42, bar: 42};
