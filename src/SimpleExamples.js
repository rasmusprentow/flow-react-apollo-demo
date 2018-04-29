// @flow
const a: boolean = true;

const b: number = 2;

const isOdd = (arg: number): boolean => !isEven(arg);

type A = {
  prop: boolean
};

type ExactA = {|
  props: boolean
|};

const a: A = { props: true, b: false };
const exactA: ExactA = { props: true, b: false };
const exactA2: $Exact<A> = { props: true, b: false };


