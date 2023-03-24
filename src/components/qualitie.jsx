import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name, key }) => {
  return (
    <td key={key} className={`badge bg-${color} m-1`}>
      {name}
    </td>
  );
};

Qualitie.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
};

export default Qualitie;
