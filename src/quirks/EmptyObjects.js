// @flow

type AllOptionalType = {|
  optional1?: boolean,
  optional2?: boolean,
|};

// $ExpectError
const a: AllOptionalType = {};

