import React from 'react';
import {useState,useEffect} from "react"
import axios from "axios"
import {Link} from "@reach/router"
import {navigate} from "@reach/router"

const Show = props => {
    const[pet,setPet]= useState(false)


    const handleDestroy = id => {
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
            .then(navigate("/"))
            .catch(err => console.log(err.message))
    }

    useEffect(()=> {
            axios.get(`http://localhost:8000/api/pets/${props.id}`)
                .then(res => {
                    console.log(res.data.results)
                    setPet(res.data.results[0])
                    })   
                .catch(err => console.log(err.response))
        },[props])
    return (
        pet ?
        <div className="card col-9 mx-auto">
            <Link to="/">Home</Link>
            <button className="btn btn-info" onClick={() => handleDestroy(pet._id)}>Adopt {pet.name}</button>
            <div className="card-body">
                <h1 className="card-title">{pet.name}</h1>
                <p className="card-text">Pet Type :{pet.type}</p>
                <p className="card-text">Description: {pet.description}</p>
                <p className="card-text">Skill 1: {pet.skill_1}</p>
                <p className="card-text">Skill 2: {pet.skill_2}</p>
                <p className="card-text">Skill 3: {pet.skill_3}</p>
            </div>
        </div> : <h1>Pets to be shown!</h1>
        
    );
};

export default Show;