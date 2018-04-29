// @flow

import React from "react";

type PropsType = {|
  id: number
|};

type StateType = {/* ... */};

class TestComponent extends
    React.Component<PropsType, StateType> {
  render() {
    return <div>{this.props.id}</div>;
  }
}

export default () => <TestComponent id={2}/>