import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { getUserObservations } from "../../controllers";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 100%;

  .ReactTable {
    max-width: 40%;
    color: #fff;
    background-color: #303030;
    margin-left: auto;
    margin-right: auto;
  }

  .ReactTable .rt-thead {
    font-weight: bold;
    background-color: #404040;
  }

  .ReactTable .-pagination .-btn  {
    color: #fff;
  }

  .ReactTable .-pagination input,
  .ReactTable .-pagination select {
    color: #fff;
    background-color: #303030;
  }
`;

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
      const data = getUserObservations(id);
      setUserObservations(data);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
      <ProfileContainer>
        <h2>Your observations</h2>
        <ReactTable columns={columns} data={userObservations} showPagination={true} pageSize={5} />
      </ProfileContainer>
  );
};

export default Profile;
