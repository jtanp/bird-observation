import React,{useState, useEffect} from "react";
import ObservationComponent from "../components/ObservationComponent";
import {getBirds, create} from '../controllers/ObservationController';


const ObservationContainer=()=>{
    //https://reactjs.org/docs/hooks-state.html
    const [birds, setBirds] = useState([]); 
    const [observation, setObservation] = useState({});

    //function is called once at the beginning
    //https://reactjs.org/docs/hooks-effect.html
    useEffect(()=>{
        initData();
    },[]);
    
    async function initData(){
        getBirds()
        .then(data=>{
            setBirds(data);
        })
        .catch((error) => {
            alert("Fetching bird data failed.", error);
        });
    }

    //takes care updating the description
    const handleChange = (e) => {
        let newObservation = {...observation};
        newObservation[e.target.key] = e.target.value;
        setObservation(newObservation);
    };

    const handleSubmit=()=>{
        const result = create(observation);
        console.log(result);
        alert("Saved " +JSON.stringify(observation));
    }
    
    return(
        <div>
            <ObservationComponent theBirds={birds} submit={handleSubmit} observation={observation} change={handleChange}/>
        </div>
    );
}

export default ObservationContainer;