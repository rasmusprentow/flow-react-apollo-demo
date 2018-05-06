/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type AddFilmMutationVariables = {|
  title: string,
|};

export type AddFilmMutation = {|
  addFilm: {|
    __typename: "Film",
    // The title of this film.
    title: ?string,
    // The name of the director of this film.
    director: ?string,
  |},
|};