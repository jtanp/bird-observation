import React from "react";
import styled from "styled-components";
import { Button } from "../../theme/styles";

const ObservationForm = styled.div`
  display: block;
  text-align: center;
  width: 300px;
  margin: auto;

  label {
    display: inline-block;
    color: ${(props) => props.theme.colors.white};
    width: 20%;
    padding: 3px;
    text-align: left;
  }

  input, select {
    display: inline-block;
    width: 80%;
    padding: 10px;
    margin: 5px 0px 5px 0px;
    border: 1px solid #222222;
    border-radius: 5px;
    box-sizing: border-box;
  }
`;

const Observation = (props) => {
  const birdOptions =
    props.birds !== undefined &&
    props.birds.map((bird, index) => {
      return (
        <option key={parseInt(index)} value={bird.id}>
          {bird.english}
        </option>
      );
    });

  return (
    <ObservationForm>
      <h2>Save a bird observation</h2>
      <label>Bird: </label>
      <select onChange={(e) => props.change(e)} name="bird">
        {birdOptions}
      </select>
      <br />
      <label>Place: </label>
      <input
        type="text"
        onChange={(e) => props.change(e)}
        name="place"
        value={props.observation.place}
      />
      <br />
      <label>Time: </label>
      <input
        type="date"
        onChange={(e) => props.change(e)}
        name="time"
        placeholder="YYYY-MM-DD"
        value={props.observation.time}
      />
      <br />
      <Button onClick={props.submit}>Save</Button>
    </ObservationForm>
  );
};

export default Observation;
