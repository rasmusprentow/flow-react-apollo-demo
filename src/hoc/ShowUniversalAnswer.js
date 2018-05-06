//@flow
import React from 'react';
import {type HOC} from 'recompose';
import {withUniversalAnswer} from './OwnHoc';

const UniversalAnswerDisplay = props => <div>{props.universalAnswer}</div>;

const enhancer: HOC<*, {||}> = withUniversalAnswer;

export default enhancer(UniversalAnswerDisplay);
