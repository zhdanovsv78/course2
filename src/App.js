import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api/fake.api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id) => {
    const newArr = [...users];
    newArr.map((item) =>
      item._id === id ? (item.bookmark = !item.bookmark) : item.bookmark
    );
    console.log(newArr);
    setUsers(newArr);
  };

  const handleReset = () => {
    setUsers(api.users.fetchAll());
  };

  const handleOnFilterBookMarkTrue = () => {
    let newArray = api.users.fetchAll();
    setUsers(newArray);
    newArray = [...newArray].filter((item) => item.bookmark);
    setUsers(newArray);
  };

  const handleOnFilterBookMarkFalse = () => {
    let newArray = api.users.fetchAll();
    setUsers(newArray);
    newArray = [...newArray].filter((item) => item.bookmark === false);
    setUsers(newArray);
  };

  return (
    <div>
      <SearchStatus length={users.length} />
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleReset()}
      >
        <i className="bi bi-arrow-clockwise"></i>
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleOnFilterBookMarkTrue()}
      >
        <i className="bi bi-bookmark-fill"></i>
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleOnFilterBookMarkFalse()}
      >
        <i className="bi bi-bookmark"></i>
      </button>

      <Users
        onDelete={handleDelete}
        onMark={handleToggleBookMark}
        users={users}
      />
    </div>
  );
};

export default App;
