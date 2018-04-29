// // @flow
// import React from "react";
// import { compose, withProps, type HOC } from "recompose";
//
// const MyComponent = props => (
//   <div>
//     {props.foo}
//     {props.foobar}
//   </div>
// );
//
// type EnhancedCompProps = { bar: number };
//
// const enhancer: HOC<*, { bar: number }> = compose(
//   withProps(({ bar }) => ({
//     bar: `${bar}`
//   })),
//   withProps(({ bar }) => ({
//     foo: 1 * bar
//   }))
// );
//
// export default enhancer(MyComponent);
