import React from "react";
const styleBookMark = {
  cursor: "pointer",
};

const BookMark = ({ status, id, onMark }) => {
  return (
    <div style={styleBookMark} className='bookmark' onClick={() => onMark(id)}>
      {!status ? (
        <i className='bi bi-bookmark'></i>
      ) : (
        <i className='bi bi-bookmark-fill'></i>
      )}
    </div>
  );
};

export default BookMark;
