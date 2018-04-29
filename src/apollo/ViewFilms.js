// @flow

import React from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

const Film = ({ film }) => <div>Title: <b>{film.title}</b></div>;

const Films = ({data}) => {
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Films</h1>
      {data.allFilms &&
        data.allFilms.films.map(film => <Film film={film} />)}
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
