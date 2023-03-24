import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
  const styleBtn = {
    border: "none"
  };
  return (
    <tr>
      <td>{props.key}</td>
      <td>{props.name}</td>

      {props.qualities.map((item) => (
        <Qualitie color={item.color} name={item.name} key={item._id} />
      ))}

      <td>{<div>{props.profession.name}</div>}</td>
      <td>{props.completedMeetings}</td>
      <td>{props.rate}</td>
      <td>
        <BookMark
          status={props.bookmark}
          id={props._id}
          onMark={() => props.onMark(props.key)}
        />
      </td>
      <td>
        <button
          style={styleBtn}
          className="btn btn-danger"
          onClick={() => props.onDelete(props._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

User.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  bookmark: PropTypes.bool.isRequired,
  _id: PropTypes.string.isRequired,
  onMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default User;
