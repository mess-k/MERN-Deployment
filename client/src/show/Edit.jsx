import {useState,useEffect} from  "react"
import axios from "axios"
import React from 'react';
import PetForm from "../components/PetForm"
import { navigate } from "@reach/router";
import {Link} from "@reach/router"


const Edit = props => {
    const [pet,setPet] = useState({
        name: "",
        type: "",
        description: "",

    })

    const [errors,setErrors] = useState({
        name:"",
        type:"",
        message:"",
        description:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => {
                setPet(res.data.results[0])
            })
            .catch(err =>console.log(err.response.data))
    },[props])

    var handleChange = e =>{
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })
    }

    var handleSubmit = e =>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pets/update/${props.id}`,pet)
            .then(res=> navigate('/'))
            .catch(err => {
                console.log(err.response.data)
                setErrors(err.response.data.errors)
            })
    }

    return(
        <>
        <Link to="/">Home</Link>
        <h4>Edit pet</h4>
        <PetForm
        inputs={pet}
        title="Create pet"
        submitValue="Submit"
        handleInputChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        />
        </>
    )
};


export default Edit;