import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

function Shows({ shows }) {
  return (
    <ul>
      {shows.map((show, key) => (
        <li key={key}>
          <Link to={`/shows/${show.slug}`}>{show.name}</Link>
        </li>
      ))}
    </ul>
  );
}

Shows.defaultProps = {
  shows: [],
};
Shows.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object),
};

export default Shows;
