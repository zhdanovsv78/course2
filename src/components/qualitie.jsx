import React from "react";

const Qualitie = ({ color, name, _id }) => {
  return (
    <td key={_id} className={`badge bg-${color} m-1`}>
      {name}
    </td>
  );
};

export default Qualitie;
