import React from "react";
import styled from "styled-components";
import { Button } from "../../styles";

const ObservationForm = styled.div`
  display: block;
  text-align: center;
  width: 300px;
  margin: auto;

  label {
    display: inline-block;
    color: #fff;
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
  //console.log(props.birds);

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
      ></input>
      <br />
      <label>Time: </label>
      <input
        type="date"
        onChange={(e) => props.change(e)}
        name="time"
        placeholder="YYYY-MM-DD"
        value={props.observation.time}
      ></input>
      <br />
      <Button onClick={props.submit}>Save</Button>
    </ObservationForm>
  );
};

export default Observation;
