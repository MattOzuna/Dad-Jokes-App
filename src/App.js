import React, { Component } from "react";
// import JokeList from "./JokeList";
import NewJokeList from "./functional_components/NewJokeList";

/** App component. Renders list of jokes. */

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <JokeList /> */}
        <NewJokeList />
      </div>
    );
  }
}

export default App;
