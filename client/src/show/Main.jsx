import React from 'react';
import {useEffect,useState} from 'react'
import axios from "axios"
import {Link} from "@reach/router"


const Main = props => {
    const [pet,setPet] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err.message))
    },[pet])



    return (
        <div>
            <Link to="/new">Add a pet to the shelter</Link>
            <p>Pets ready for a good home:</p>
            <table className="table table-striped table-dark col-9 mx-auto">
                <thead>
                    <tr>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="mx-auto">
                    {
                        pet.map((p,i)=>{
                            return <tr key = {i}>
                                <td>{p.name}</td>
                                <td>{p.type}</td>
                                <td>
                                    <div className="btn">
                                        <Link to={`/pets/${p._id}`} className="btn btn-primary">Details</Link>
                                        <Link to={`/edit/${p._id}`} className="btn btn-primary">Edit</Link>
                                    </div>
                                </td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};



export default Main;