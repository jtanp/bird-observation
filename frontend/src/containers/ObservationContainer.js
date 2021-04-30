import React,{useState, useEffect} from "react";
import ObservationComponent from "../components/observation/ObservationComponent";
import {getBirds, createObservation, getObservations} from '../controllers/ObservationController';

const ObservationContainer = () => {
    const [birds, setBirds] = useState([]);
    const [observations, setObservations] = useState([]);
    const [observation, setObservation] = useState({});

    useEffect(()=>{
        initData();
    },[]);
    
    async function initData(){
        getBirds()
        .then(data=>{
            setBirds(data);
        })
        .catch((error) => {
            alert("Fetching birds failed.", error);
        });
        getObservations()
        .then(data=>{
            setObservations(data);
        })
        .catch((error) => {
            alert("Fetching observations failed.", error);
        });
    }

    const handleChange = (e) => {
        let newObservation = {...observation};
        newObservation[e.target.name] = e.target.value;
        setObservation(newObservation);
    };

    const handleSubmit=()=>{
        const result = createObservation(observation);
        console.log(result);
        alert("Observation saved!");
    }
    
    return(
        <div>
            <ObservationComponent birds={birds} submit={handleSubmit} observation={observation} observations={observations} change={handleChange}/>
        </div>
    );
}

export default ObservationContainer;