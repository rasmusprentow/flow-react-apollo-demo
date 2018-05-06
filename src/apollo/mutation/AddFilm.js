// @flow

import React from 'react';

import {graphql, type OperationComponent} from 'react-apollo';
import query from './AddFilm.graphql';
import type {
  AddFilmMutation,
  AddFilmMutationVariables,
} from './AddFilm.graphql.types';

const Films = ({mutate}) => {
  mutate({variables: {title: 2}});
  return <div />;
};

const withQuery: OperationComponent<
  AddFilmMutation,
  *,
  AddFilmMutationVariables
  > = graphql(query);

export default withQuery(Films);
