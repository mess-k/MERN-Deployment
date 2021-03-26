import {useState} from  "react";
import axios from "axios";
import React from 'react';
import PetForm from "../components/PetForm";
import { navigate } from "@reach/router";
import {Link} from "@reach/router";


const Create = props => {
    const [pet,setPet] = useState({
        name: "",
        type: "",
        description: "",

    })
    
    const [errors,setErrors] = useState({
        name: "",
        message: "",
        type: "",
        description:""
    })

    const handleChange = e =>{
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/pets/new",pet)
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    return(
        <>
        <Link to="/">Home</Link>
        <p>Add a new pet</p>
        <PetForm
        inputs={pet}
        title="Create product"
        submitValue="Create"
        handleInputChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        />
        </>
    )
};

export default Create;