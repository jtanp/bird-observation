import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import "./Profile.css";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const Profile = ({ isLoggedIn }) => {
  const [userObservations, setUserObservations] = useState([]);
  const columns = [
    { Header: "Id", accessor: "id" },
    { Header: "Bird", accessor: "bird" },
    { Header: "Place", accessor: "place" },
    { Header: "Time", accessor: "time" },
    { Header: "User id", accessor: "userId" },
  ];

  useEffect(() => {
    if (isLoggedIn) {
      const id = JSON.parse(localStorage.getItem("loggedUser")).id;
      const getUserObservations = (id) => {
        fetch(`http://localhost:8080/users/${id}/observations`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.json())
        .then((data) => setUserObservations(data))
        .catch((error) => alert("Error fetching user observations", error));
      };
      getUserObservations(id);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="profile">
      <div className="observations">
        <h2>Your observations</h2>
        <ReactTable columns={columns} data={userObservations} showPagination={true} pageSize={5} />
      </div>
    </div>
  );
};

export default Profile;
