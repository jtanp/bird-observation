import React from "react";
import "./Observation.css";

const ObservationComponent = (props) => {
    //console.log(props.birds);

    const birdOptions = props.birds!==undefined&&props.birds.map((bird, index)=>{
        return <option key={parseInt(index)} value={bird.id}>{bird.english}</option>
    })

    return(
        <div className="observationForm">
            <h2>Save a bird observation</h2>
            <label>Bird: </label>
            <select onChange={e=>props.change(e)} name="bird">{birdOptions}</select><br />
            <label>Place: </label>
            <input type="text" onChange={e=>props.change(e)} name="place" value={props.observation.place}></input><br />
            <label>Time: </label>
            <input type="date" onChange={e=>props.change(e)} name="time" placeholder="YYYY-MM-DD" value={props.observation.time}></input><br />
            <button onClick={props.submit}>Save</button>
        </div>
    );
}

export default ObservationComponent;