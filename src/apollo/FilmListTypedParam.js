// @flow

import React from 'react';

import {graphql, type OperationComponent} from 'react-apollo';
import query from './AllFilmsParam.graphql';
import type {
  AllFilmsQuery,
  AllFilmsQueryVariables,
} from './AllFilmsParam.graphql.types';

const Film = ({film}) => (
  <div>
    Title: <b>{film.title}</b> directed by: {film.director}
  </div>
);

const Films = ({data}) => {
  if (data.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Films (Params)</h1>
      {data.allFilms &&
        data.allFilms.films.map(film => <Film key={film.title} film={film} />)}
    </div>
  );
};

const withQuery: OperationComponent<
  AllFilmsQuery,
  {},
  *,
  AllFilmsQueryVariables
> = graphql(query, {options: () => ({variables: {first: 2, last: 3}})});

export default withQuery(Films);
