import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { Observation } from "../components/pages";
import { getBirds, createObservation } from "../controllers";

const ObservationContainer = ({ isLoggedIn }) => {
  const [birds, setBirds] = useState([]);
  const [observation, setObservation] = useState({});

  useEffect(() => {
    initData();
  }, []);

  async function initData() {
    getBirds()
      .then((data) => setBirds(data))
      .catch((error) => alert("Fetching birds failed.", error));
  }

  const handleChange = (e) => {
    let newObservation = { ...observation };
    newObservation[e.target.name] = e.target.value;
    setObservation(newObservation);
  };

  const handleSubmit = () => {
    observation["userId"] = JSON.parse(localStorage.getItem("loggedUser")).id;
    createObservation(observation);
    alert("Observation saved!");
  };

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Observation
        birds={birds}
        submit={handleSubmit}
        observation={observation}
        change={handleChange}
      />
    </div>
  );
};

export default ObservationContainer;
