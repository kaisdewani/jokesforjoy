import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Joke from "./componenets/Joke";
import Navbar from "./componenets/Navbar";

class App extends Component {
  state = {
    jokes: [],
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://official-joke-api.appspot.com/jokes/general/ten"
    );

    this.setState({ jokes: res.data });
  }

  render() {
    const { jokes } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Joke jokes={jokes} />
        </div>
      </div>
    );
  }
}

export default App;
