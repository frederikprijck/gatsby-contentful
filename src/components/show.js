import React from "react";
import PropTypes from "prop-types";

function Show({ show }) {
  const { name, description } = show;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

Show.defaultProps = {
  show: {},
};

Show.propTypes = {
  show: PropTypes.object,
};

export default Show;
