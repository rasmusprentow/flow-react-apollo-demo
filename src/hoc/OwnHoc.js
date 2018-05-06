// @flow
import React, {type ComponentType} from 'react';

type BaseType<Props> = ComponentType<Props & {universalAnswer: number}>;

type EnhancedType<Props> = ComponentType<
  $Diff<Props, {universalAnswer: number | void}>
  >;

export const withUniversalAnswer = <Props: {}>(
  BaseComponent: BaseType<Props>
): EnhancedType<Props> => {
  const WrappedComponent = props => (
    <BaseComponent {...props} universalAnswer={42} />
  );
  return WrappedComponent;
};
