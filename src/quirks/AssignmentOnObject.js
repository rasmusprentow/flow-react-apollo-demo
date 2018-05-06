// // @flow

class Foobar {
  prop: string;
}

const f1 = (foo: Object) => {
  foo.newProp = 'hi';
};

const f2 = (foo: Foobar) => {
  // $ExpectError
  foo.newProp = 'hi';
};

f1(new Foobar());
f2(new Foobar());
