import React, { Component } from "react";

import "./App.css";

class App extends Component {
  foo = () => "bars";
  render() {
    const name = "John Doe";
    const loading = false;
    return (
      <div className="App">
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello {this.foo().toUpperCase()}</h1>
        )}
      </div>
    );
  }
}

export default App;
