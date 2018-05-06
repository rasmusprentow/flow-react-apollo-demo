/* eslint-disable no-unused-vars,cup/no-undef */
// @flow
const a: boolean = true;

const b: number = 2;

const isOdd = (arg: number): boolean => !isEven(arg);

type A = {
  bar: boolean,
};

type ExactA = {|
  bar: boolean,
|};

const aa: A = {bar: true, b: false}; // Ok
// $ExpectError
const exactA: ExactA = {bar: true, b: false}; // Error
// $ExpectError
const exactA2: $Exact<A> = {bar: true, b: false}; // Error
