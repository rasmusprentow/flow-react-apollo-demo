// @flow

type NonOptional = {
  foo: number,
};

const a: NonOptional = {};

const b: {...NonOptional} = {};

type ExactNonOptional = {|
  foo: number,
|};

const c: {|...ExactNonOptional|} = {};
