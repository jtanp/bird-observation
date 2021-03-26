import React,{useState, useEffect} from "react";
import ObservationComponent from "../components/ObservationComponent";
import {getBirds, create} from '../controllers/ObservationController';


const ObservationContainer=()=>{
    //https://reactjs.org/docs/hooks-state.html
    const [birds, setBirds] = useState([]); 
    const [observation, setObservation] = useState({});

    /*
    useEffect(()=>{
        const anArray = getBirds(); //pyydetään linnut controllerilta
        setBirds(anArray);          //tallennetaan tulos paikallisesti
    },[]);
    */

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
            alert("Error", error);
        });
    }

    
    //takes care updating the description
    const handleChange = (e) => {
        let observationNew = {...observation};   //avoid mutation
        observationNew[e.target.key] = e.target.value;
        setObservation(observationNew); //storing to the memory of container
    };

    const handleSubmit=()=>{
        const result = create(observation);
        console.log(result);
        alert("Tallennettu " +JSON.stringify(observation));
    }
    
    return(
        <div>
            <ObservationComponent theBirds={birds} submit={handleSubmit} observation={observation} change={handleChange}/>
        </div>
    );
}

export default ObservationContainer;