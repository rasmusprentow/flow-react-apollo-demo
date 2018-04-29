// @flow
import React, { Component } from "react";
import "./App.css";
import Demo from "./MotivationalExample";
import UsingRecompose from "./hoc/UsingRecompose";
import ViewFilms from "./apollo/ViewFilms";

class App extends Component<any> {
  render() {
    return (
      <div className="App">
        <ViewFilms />
      </div>
    );
  }
}

export default App;
