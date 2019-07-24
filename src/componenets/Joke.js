import React, { Component } from "react";
import Jokecard from "./Jokecard";
import PropTypes from "prop-types";

class Joke extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.jokes.map(joke => (
          <Jokecard key={joke.id} joke={joke} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 0.5fr))",
  gridGap: "2rem",
};

Jokecard.propTypes = {
  joke: PropTypes.object.isRequired,
};

export default Joke;
