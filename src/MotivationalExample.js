// @flow
import React from "react";

const PlusTwo = ({ base }) => <div>{base + 2}!!</div>;

const Comp = () => <PlusTwo base={"2"} />;

export default Comp;


// -----------------------------------------------------

const TypedPlusTwo = ({ base }: {base: number}) => <div>{base + 2}!!</div>;
