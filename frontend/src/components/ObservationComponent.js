import React from "react";

const ObservationComponent =(props)=>{
    //console.log(props.theBirds);

    const birdOptions = props.theBirds!==undefined&&props.theBirds.map((bird, index)=>{
        return <option key={parseInt(index)} value={bird.id}>{bird.finnish}</option>
    })

    return(
        <div>
            <h2>Tallenna lintuhavainto</h2>
            Lintu: <select onChange={e=>props.change(e)} name="bird">{birdOptions}</select><br />
            Paikka: <input onChange={e=>props.change(e)} name="place" value={props.observation.place} type="text"></input><br />
            Aika: <input onChange={e=>props.change(e)} name="time" value={props.observation.time} type="text"></input><br />
            Käyttäjä: <input onChange={e=>props.change(e)} name="user" value={props.observation.user} type="text"></input><br />
            <button onClick={props.submit}>Tallenna</button>
        </div>
    );
}

export default ObservationComponent;