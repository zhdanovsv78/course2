import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
  const styleBtn = {
    border: "none",
  };
  return (
    <tr>
      <td>{props.name}</td>

      {props.qualities.map((item) => (
        <Qualitie color={item.color} name={item.name} _id={item._id} />
      ))}

      <td>{<div>{props.profession.name}</div>}</td>
      <td>{props.completedMeetings}</td>
      <td>{props.rate}</td>
      <td>
        <BookMark
          status={props.bookmark}
          id={props._id}
          onMark={() => props.onMark(props._id)}
        />
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => props.onDelete(props._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
