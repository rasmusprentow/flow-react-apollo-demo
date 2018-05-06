// @flow
import React, {Component} from 'react';
import './App.css';
// import Demo from "./MotivationalExample";
// import UsingRecompose from "./hoc/UsingRecompose";
import ViewFilms from './apollo/FilmList';
import ViewFilmsTyped from './apollo/FilmListTyped';
import ViewFilmsTypedParams from './apollo/FilmListTypedParam';
import UniversalAnswer from './hoc/ShowUniversalAnswer';
import UniversalAnswerClass from './hoc/ShowUniversalAnswerClass';

class App extends Component<any> {
  render() {
    return (
      <div className="App">
        <ViewFilms />
        <ViewFilmsTyped />
        <ViewFilmsTypedParams />
        <UniversalAnswer universalAnswer={43} />
        <UniversalAnswerClass foo={23} />
      </div>
    );
  }
}

export default App;
