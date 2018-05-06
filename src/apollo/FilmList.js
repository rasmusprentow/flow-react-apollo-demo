// @flow

import React from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

const Film = ({ film }) => (
  <div>
    Title: <b>{film.title}</b> directed by: {film.director}
  </div>
);

const Films = ({ data }) => {
  if (data.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Films</h1>
      {data.allFilms.films.map(film => <Film key={film.title} film={film} />)}
    </div>
  );
};

export default graphql(gql`
  query QueryAllFilms {
    allFilms {
      films {
        title
        director
      }
    }
  }
`)(Films);
