import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";

const Users = (props) => {
  const count = props.users.length;
  const pageSize = 4; // количество страниц

  const handlePageChange = (pageIndex) => {
    console.log("page: ", pageIndex);
    setCurrentPage(pageIndex);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const userCrop = paginate(props.users, currentPage, pageSize);

  return (
    <>
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {userCrop.map((user) => (
              <User
                key={user._id}
                onDelete={props.onDelete}
                onMark={props.onMark}
                {...user}
              />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  onMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Users;
