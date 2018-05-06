//@flow
import React from 'react';
import {type HOC} from 'recompose';
import {withUniversalAnswer} from './OwnHoc';

class ShowUniversalAnswer extends React.Component<{
  universalAnswer: number,
  foo: number,
}> {
  render() {
    return <div>{this.props.universalAnswer}</div>;
  }
}

export default withUniversalAnswer(ShowUniversalAnswer);
