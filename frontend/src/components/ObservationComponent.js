import React from "react";

const ObservationComponent =(props)=>{
    //console.log(props.theBirds);

    const birdOptions = props.theBirds!==undefined&&props.theBirds.map((bird, index)=>{
        return <option key={parseInt(index)} value={bird.id}>{bird.english}</option>
    })

    return(
        <div className="Form">
            <h2>Save a bird observation</h2>
            <label>Bird: </label>
            <select onChange={e=>props.change(e)} name="bird">{birdOptions}</select><br />
            <label>Place: </label>
            <input onChange={e=>props.change(e)} name="place" value={props.observation.place} type="text"></input><br />
            <label>Time (YYYY-MM-DD): </label>
            <input onChange={e=>props.change(e)} name="time" value={props.observation.time} type="text"></input><br />
            <label>User: </label>
            <input onChange={e=>props.change(e)} name="user" value={props.observation.user} type="text"></input><br />
            <button onClick={props.submit}>Save</button>
        </div>
    );
}

export default ObservationComponent;