import React from "react";
import PropTypes from "prop-types";
const styleBookMark = {
  cursor: "pointer"
};

const BookMark = ({ status, id, onMark }) => {
  let res = null;

  !status
    ? (res = <i className="bi bi-bookmark"></i>)
    : (res = <i className="bi bi-bookmark-fill"></i>);

  return (
    <div style={styleBookMark} className="bookmark" onClick={() => onMark(id)}>
      {res}
    </div>
  );
};

BookMark.propTypes = {
  status: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onMark: PropTypes.func.isRequired
};

export default BookMark;
