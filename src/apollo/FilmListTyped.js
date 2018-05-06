// @flow

import React from 'react';

import {graphql, type OperationComponent} from 'react-apollo';
import query from './AllFilms.graphql';
import type {AllFilmsQuery} from './AllFilms.graphql.types';

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
      <h1>Films (Typed)</h1>
      {data.allFilms &&
        data.allFilms.films.map(film => <Film key={film.title} film={film} />)}
    </div>
  );
};

const withQuery: OperationComponent<AllFilmsQuery> = graphql(query);

export default withQuery(Films);
