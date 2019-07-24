import React from "react";
import PropTypes from "prop-types";

const Jokecard = ({ joke: { setup, punchline } }) => {
  return (
    <div className="demo-card-event mdl-card mdl-shadow--3dp">
      <div className="mdl-card__title mdl-card--expand">
        <h4>
          Setup: {setup}
          <br />
          <br />
          Punchline: {punchline} <br />
        </h4>
      </div>
    </div>
  );
};

Jokecard.propTypes = {
  joke: PropTypes.object.isRequired,
};

export default Jokecard;
