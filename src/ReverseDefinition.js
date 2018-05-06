// @flow
//
type FuncType = ({foo: number}) => void;
const outer = (f: FuncType) => f({foo: 42});

const inner = (arg: {foo: number, bar: number}) => arg.foo + arg.bar;
// $ExpectError
outer(inner);

// const outer = f => f({foo: 42})
//
// const inner = (arg: {foo: number, bar: number} => arg.foo + arg.bar
//
// outer(inner)
//
// const outer = f => f({ foo: 42 });
//
// const inner = arg => arg.foo + arg.bar;
//
// outer(inner);
